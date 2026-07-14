import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 2000;
const TRANSITION_MS = 600;
export const TICKER_SETS = 3;
export const TICKER_MIDDLE_SET = 1;

export function useServicesTicker(count) {
  const [physicalIndex, setPhysicalIndex] = useState(TICKER_MIDDLE_SET * count + 1);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const intervalRef = useRef(null);
  const snapTimeoutRef = useRef(null);
  const suppressTransitionRef = useRef(false);

  const activeIndex = ((physicalIndex % count) + count) % count;
  const middleStart = TICKER_MIDDLE_SET * count;
  const middleEnd = middleStart + count - 1;

  const applyTransform = useCallback((index) => {
    const track = trackRef.current;
    const item = itemRefs.current[index];
    const container = track?.parentElement;
    if (!track || !item || !container) return;

    const offset = container.offsetWidth / 2 - (item.offsetLeft + item.offsetWidth / 2);
    track.style.transform = `translateX(${offset}px)`;
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (suppressTransitionRef.current) {
      track.style.transition = 'none';
      applyTransform(physicalIndex);
      void track.offsetWidth;
      track.style.transition = '';
      suppressTransitionRef.current = false;
      return;
    }

    applyTransform(physicalIndex);

    clearTimeout(snapTimeoutRef.current);

    if (physicalIndex < middleStart || physicalIndex > middleEnd) {
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const delay = reducedMotion ? 0 : TRANSITION_MS;

      snapTimeoutRef.current = window.setTimeout(() => {
        suppressTransitionRef.current = true;
        setPhysicalIndex(middleStart + (((physicalIndex % count) + count) % count));
      }, delay);
    }

    return () => clearTimeout(snapTimeoutRef.current);
  }, [physicalIndex, count, middleStart, middleEnd, applyTransform]);

  useEffect(() => {
    const onResize = () => applyTransform(physicalIndex);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [applyTransform, physicalIndex]);

  const startAutoplay = useCallback(() => {
    clearInterval(intervalRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    intervalRef.current = window.setInterval(() => {
      setPhysicalIndex((index) => index + 1);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(snapTimeoutRef.current);
    };
  }, [startAutoplay]);

  const select = useCallback(
    (logicalIndex) => {
      setPhysicalIndex((current) => {
        const currentLogical = ((current % count) + count) % count;
        const stepsForward = (logicalIndex - currentLogical + count) % count;
        return stepsForward === 0 ? current : current + stepsForward;
      });
      startAutoplay();
    },
    [count, startAutoplay],
  );

  const setItemRef = (index) => (element) => {
    itemRefs.current[index] = element;
  };

  return { activeIndex, trackRef, setItemRef, select };
}
