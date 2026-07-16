import { useEffect, useRef, useState } from 'react';

const STACK_PEEK = 16;
const FLIP_ANGLE = 88;
const FLIP_MS = 220;
const WHEEL_THRESHOLD = 12;
const WHEEL_COOLDOWN_MS = 90;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const easeOutCubic = (t) => 1 - (1 - t) ** 3;

function getCardState(i, floatIndex) {
  const front = Math.floor(floatIndex);
  const t = floatIndex - front;

  if (i < front) {
    return { rotateX: -FLIP_ANGLE, opacity: 0, y: 0, scale: 1, z: -20 - i };
  }

  if (i === front) {
    return {
      rotateX: -FLIP_ANGLE * t,
      opacity: 1 - t * 0.45,
      y: 0,
      scale: 1,
      z: 200,
    };
  }

  if (t > 0 && i === front + 1) {
    return {
      rotateX: 0,
      opacity: 1,
      y: lerp(-STACK_PEEK, 0, t),
      scale: lerp(0.985, 1, t),
      z: 200,
    };
  }

  const depth = t > 0 ? i - front - 2 : i - front - 1;

  return {
    rotateX: 0,
    opacity: 1,
    y: -STACK_PEEK * (depth + 1),
    scale: 1 - (depth + 1) * 0.012,
    z: 150 - i,
  };
}

export function usePortfolioScroll(total) {
  const pinRef = useRef(null);
  const stackRef = useRef(null);
  const cardRefs = useRef([]);
  const rollerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  cardRefs.current = [];
  const setCardRef = (i) => (el) => {
    cardRefs.current[i] = el;
  };

  useEffect(() => {
    const pin = pinRef.current;
    const stack = stackRef.current;
    if (!pin || !stack) return;

    const mq = window.matchMedia('(max-width: 1023px)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let floatIndex = 0;
    let index = 0;
    let lastActive = -1;
    let animating = false;
    let rafId = 0;
    let wheelAcc = 0;
    let lastStepAt = 0;

    function setPinHeight() {
      if (mq.matches || reducedMotion.matches) {
        pin.style.height = '';
        return;
      }

      // Tall enough for sticky lock while wheel steps through cards.
      pin.style.height = `${window.innerHeight * total}px`;
    }

    function render(value) {
      const nextActive = Math.min(total - 1, Math.round(value));

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const state = getCardState(i, value);
        card.style.transform = `translate3d(0, ${state.y}px, 0) rotateX(${state.rotateX}deg) scale(${state.scale})`;
        card.style.opacity = String(state.opacity);
        card.style.zIndex = String(state.z);
        card.classList.toggle('is-front', i === nextActive);
        card.classList.remove('is-done');
      });

      if (rollerRef.current) {
        rollerRef.current.style.transform = `translateY(${-nextActive * 20}px)`;
      }

      if (nextActive !== lastActive) {
        lastActive = nextActive;
        setActiveIndex(nextActive);
      }
    }

    function resetInlineStyles() {
      cancelAnimationFrame(rafId);
      animating = false;
      floatIndex = 0;
      index = 0;
      wheelAcc = 0;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        card.style.removeProperty('transform');
        card.style.removeProperty('opacity');
        card.style.removeProperty('z-index');
        card.classList.toggle('is-front', i === 0);
        card.classList.remove('is-done');
      });

      if (rollerRef.current) {
        rollerRef.current.style.removeProperty('transform');
      }

      lastActive = 0;
      setActiveIndex(0);
    }

    function syncScrollToIndex(nextIndex) {
      const maxScroll = pin.offsetHeight - window.innerHeight;
      const target = pin.offsetTop + (maxScroll * nextIndex) / Math.max(total - 1, 1);
      window.scrollTo({ top: target, behavior: 'auto' });
    }

    function animateTo(nextIndex) {
      nextIndex = clamp(nextIndex, 0, total - 1);
      if (nextIndex === index && !animating) {
        render(nextIndex);
        return;
      }

      cancelAnimationFrame(rafId);
      const from = floatIndex;
      const start = performance.now();
      const duration = reducedMotion.matches ? 0 : FLIP_MS;
      animating = true;
      index = nextIndex;

      if (duration === 0) {
        floatIndex = nextIndex;
        animating = false;
        render(floatIndex);
        syncScrollToIndex(nextIndex);
        return;
      }

      function tick(now) {
        const t = clamp((now - start) / duration, 0, 1);
        floatIndex = lerp(from, nextIndex, easeOutCubic(t));
        render(floatIndex);

        if (t < 1) {
          rafId = requestAnimationFrame(tick);
          return;
        }

        floatIndex = nextIndex;
        animating = false;
        render(floatIndex);
        syncScrollToIndex(nextIndex);
      }

      rafId = requestAnimationFrame(tick);
    }

    function isPinned() {
      const rect = pin.getBoundingClientRect();
      return rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
    }

    function onWheel(e) {
      if (mq.matches || reducedMotion.matches) return;
      if (!isPinned()) return;

      const dir = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
      if (!dir) return;

      const atStart = index <= 0 && dir < 0;
      const atEnd = index >= total - 1 && dir > 0;
      if (atStart || atEnd) return;

      e.preventDefault();

      wheelAcc += e.deltaY;
      if (Math.abs(wheelAcc) < WHEEL_THRESHOLD) return;

      const now = performance.now();
      if (animating || now - lastStepAt < WHEEL_COOLDOWN_MS) {
        wheelAcc = 0;
        return;
      }

      const stepDir = wheelAcc > 0 ? 1 : -1;
      wheelAcc = 0;
      lastStepAt = now;
      animateTo(index + stepDir);
    }

    function updateFromScroll() {
      if (mq.matches || reducedMotion.matches) {
        resetInlineStyles();
        return;
      }

      if (animating) return;

      const rect = pin.getBoundingClientRect();
      const maxScroll = pin.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) {
        render(0);
        return;
      }

      const scrolled = clamp(-rect.top, 0, maxScroll);
      const progress = scrolled / maxScroll;
      const next = Math.round(progress * (total - 1));

      if (next !== index) {
        index = next;
        floatIndex = next;
        render(floatIndex);
      }
    }

    function handleMqChange() {
      setPinHeight();
      updateFromScroll();
    }

    setPinHeight();
    render(0);
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', handleMqChange);
    mq.addEventListener('change', handleMqChange);
    reducedMotion.addEventListener('change', handleMqChange);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', handleMqChange);
      mq.removeEventListener('change', handleMqChange);
      reducedMotion.removeEventListener('change', handleMqChange);
    };
  }, [total]);

  return { pinRef, stackRef, setCardRef, rollerRef, activeIndex };
}
