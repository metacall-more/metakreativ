import { useEffect, useRef } from 'react';

const SCROLL_STEPS = 0.85;
const STACK_PEEK = 16;
const FLIP_ANGLE = 88;

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

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

    function setPinHeight() {
      if (mq.matches || reducedMotion.matches) {
        pin.style.height = '';
        return;
      }

      const viewport = window.innerHeight;
      pin.style.height = `${viewport + viewport * SCROLL_STEPS * (total - 1)}px`;
    }

    function render(floatIndex) {
      const activeIndex = Math.min(total - 1, Math.round(floatIndex));

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const state = getCardState(i, floatIndex);
        card.style.transform = `translate3d(0, ${state.y}px, 0) rotateX(${state.rotateX}deg) scale(${state.scale})`;
        card.style.opacity = String(state.opacity);
        card.style.zIndex = String(state.z);
        card.classList.toggle('is-front', i === activeIndex);
        card.classList.remove('is-done');
      });

      if (rollerRef.current) {
        rollerRef.current.style.transform = `translateY(${-activeIndex * 20}px)`;
      }
    }

    function resetInlineStyles() {
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
    }

    function updateFromScroll() {
      if (mq.matches || reducedMotion.matches) {
        resetInlineStyles();
        return;
      }

      const rect = pin.getBoundingClientRect();
      const maxScroll = pin.offsetHeight - window.innerHeight;
      const scrolled = clamp(-rect.top, 0, maxScroll);
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0;
      const floatIndex = progress * (total - 1);

      render(floatIndex);
    }

    function handleMqChange() {
      setPinHeight();
      updateFromScroll();
    }

    setPinHeight();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', handleMqChange);
    mq.addEventListener('change', handleMqChange);
    reducedMotion.addEventListener('change', handleMqChange);
    updateFromScroll();

    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', handleMqChange);
      mq.removeEventListener('change', handleMqChange);
      reducedMotion.removeEventListener('change', handleMqChange);
    };
  }, [total]);

  return { pinRef, stackRef, setCardRef, rollerRef };
}
