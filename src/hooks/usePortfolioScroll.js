import { useEffect, useRef } from 'react';

// Reference-verified (see Portfolio.jsx comment): card 0 stays at
// translateZ(0) always. Cards 1..N-1 start pushed back in 3D space
// (-50px per step) and each has its own scroll-progress window in which
// it "catches up" to translateZ(0), staggered so each window starts 0.2
// into the previous one's. A card has "arrived" once its own catch-up
// window completes; the active (title-on) card is whichever arrived most
// recently, and cards that arrived earlier fade out entirely rather than
// sitting hidden behind the new front card.
const WINDOW = 0.4;
const STAGGER = 0.2;
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

export function usePortfolioScroll(total) {
  const stackRef = useRef(null);
  const cardRefs = useRef([]);
  const rollerRef = useRef(null);

  cardRefs.current = [];
  const setCardRef = (i) => (el) => {
    cardRefs.current[i] = el;
  };

  useEffect(() => {
    const stack = stackRef.current;
    if (!stack) return;

    const mq = window.matchMedia('(max-width: 960px)');

    function render(progress) {
      let activeIndex = 0;
      for (let i = 1; i < total; i++) {
        const windowStart = (i - 1) * STAGGER;
        const t = clamp((progress - windowStart) / WINDOW, 0, 1);
        if (t >= 1 - 1e-6) activeIndex = i;
      }

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        if (i === 0) {
          card.style.transform = 'translateZ(0px)';
        } else {
          const windowStart = (i - 1) * STAGGER;
          const t = clamp((progress - windowStart) / WINDOW, 0, 1);
          const z = lerp(-50 * i, 0, t);
          card.style.transform = `translateZ(${z}px)`;
        }
        card.classList.toggle('is-front', i === activeIndex);
        card.classList.toggle('is-done', i < activeIndex);
        card.style.zIndex = i === activeIndex ? '100' : String(-1 - i);
      });

      if (rollerRef.current) {
        rollerRef.current.style.setProperty('--roll', `${-activeIndex * 20}px`);
      }
    }

    function resetInlineStyles() {
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.style.removeProperty('transform');
        card.style.removeProperty('z-index');
        card.classList.remove('is-front', 'is-done');
      });
      if (rollerRef.current) rollerRef.current.style.removeProperty('--roll');
    }

    function updateFromScroll() {
      if (mq.matches) return;
      const rect = stack.getBoundingClientRect();
      const progress = clamp(
        (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        0,
        1
      );
      render(progress);
    }

    function handleMqChange(e) {
      if (e.matches) resetInlineStyles();
      else updateFromScroll();
    }

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);
    mq.addEventListener('change', handleMqChange);
    updateFromScroll();

    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
      mq.removeEventListener('change', handleMqChange);
    };
  }, [total]);

  return { stackRef, setCardRef, rollerRef };
}
