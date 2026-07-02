import { useEffect, useRef } from 'react';

const ROLE_CLASSES = ['is-active', 'is-peek', 'is-hidden'];
const ANIM_CLASSES = ['arrive-active', 'arrive-peek', 'arrive-hidden'];
const ANIMATION_MS = 1100;

export function useTestimonialDeck(total) {
  const cardRefs = useRef([]);
  const currentRef = useRef(0);
  const animatingRef = useRef(false);

  cardRefs.current = [];
  const setCardRef = (i) => (el) => {
    cardRefs.current[i] = el;
  };

  function roleFor(index, from) {
    const d = (index - from + total) % total;
    return d === 0 ? 'active' : d === 1 ? 'peek' : 'hidden';
  }

  function settle() {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      card.classList.remove(...ROLE_CLASSES, ...ANIM_CLASSES);
      card.classList.add('is-' + roleFor(i, currentRef.current));
    });
  }

  // Destination role determines the swing shape, not prev/next or the
  // card's prior role (verified against the reference carousel). "current"
  // tracks the active card's index: clicking next moves it back to the
  // peek slot (index - 1); clicking prev pulls the peek card forward
  // into active (index + 1).
  function go(direction) {
    if (animatingRef.current || total < 2) return;
    animatingRef.current = true;

    const nextCurrent =
      direction === 'next' ? (currentRef.current - 1 + total) % total : (currentRef.current + 1) % total;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const newRole = roleFor(i, nextCurrent);
      card.classList.remove(...ANIM_CLASSES);
      card.classList.add('arrive-' + newRole);
    });

    currentRef.current = nextCurrent;

    window.setTimeout(() => {
      settle();
      animatingRef.current = false;
    }, ANIMATION_MS);
  }

  useEffect(() => {
    settle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return { setCardRef, next: () => go('next'), prev: () => go('prev') };
}
