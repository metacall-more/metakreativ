import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 2000;

export function useServicesTicker(count) {
  const [activeIndex, setActiveIndex] = useState(1);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const intervalRef = useRef(null);

  const centerActive = useCallback(() => {
    const track = trackRef.current;
    const item = itemRefs.current[activeIndex];
    const container = track?.parentElement;
    if (!track || !item || !container) return;

    const offset = container.offsetWidth / 2 - (item.offsetLeft + item.offsetWidth / 2);
    track.style.transform = `translateX(${offset}px)`;
  }, [activeIndex]);

  useLayoutEffect(() => {
    centerActive();
  }, [activeIndex, centerActive]);

  useEffect(() => {
    const onResize = () => centerActive();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [centerActive]);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    intervalRef.current = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % count);
    }, AUTOPLAY_MS);
  }, [count]);

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(intervalRef.current);
  }, [startAutoplay]);

  const select = useCallback(
    (index) => {
      setActiveIndex(index);
      startAutoplay();
    },
    [startAutoplay],
  );

  const setItemRef = (index) => (element) => {
    itemRefs.current[index] = element;
  };

  return { activeIndex, trackRef, setItemRef, select };
}
