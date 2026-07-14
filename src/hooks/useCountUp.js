import { useEffect, useRef, useState } from 'react';

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

/** True while `ref` is in view; flips false when it leaves so animations can replay. */
export function useInViewReplay(ref, { threshold = 0.25 } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}

/** Counts 0 → target whenever `active` becomes true; resets to 0 when false. */
export function useCountUp(target, active, { duration = 1600 } = {}) {
  const [value, setValue] = useState(0);
  const frameRef = useRef(0);

  useEffect(() => {
    cancelAnimationFrame(frameRef.current);

    if (!active) {
      setValue(0);
      return undefined;
    }

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * easeOutCubic(progress)));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      }
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, active, duration]);

  return value;
}
