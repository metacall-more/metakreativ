import { useEffect, useRef, useState } from 'react';

const INTERVAL_MS = 2000;
const DRAG_THRESHOLD = 40;

const SLIDE_WIDTH = {
  2: 'w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-1.25rem)/2)]',
  4: 'w-[calc((100%-2.25rem)/4)] sm:w-[calc((100%-3rem)/4)] md:w-[calc((100%-3.75rem)/4)]',
};

/**
 * Auto-advancing strip: shows `visible` images, advances one-by-one every 2s,
 * supports mouse drag + click / arrow navigation.
 * Images use object-contain so they are never cropped or zoomed.
 */
export default function ProjectShowcaseCarousel({
  images,
  visible = 2,
  className = 'mt-10 md:mt-14',
  imageClassName = 'h-auto w-full object-contain',
}) {
  const scrollerRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images?.length ?? 0;
  const visibleCount = Math.min(visible, Math.max(count, 1));
  const maxIndex = Math.max(0, count - visibleCount);
  const slideWidthClass = SLIDE_WIDTH[visibleCount] ?? SLIDE_WIDTH[2];

  const goTo = (next) => {
    if (count <= 1) return;
    if (maxIndex === 0) {
      setIndex(0);
      return;
    }
    let value = next;
    if (value > maxIndex) value = 0;
    if (value < 0) value = maxIndex;
    setIndex(value);
  };

  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (count <= visibleCount || paused) return undefined;

    const id = window.setInterval(() => {
      setIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [count, paused, maxIndex, visibleCount]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || count === 0) return;

    const slide = scroller.children[index];
    if (!slide) return;

    scroller.scrollTo({
      left: slide.offsetLeft - scroller.offsetLeft,
      behavior: 'smooth',
    });
  }, [index, count]);

  const onPointerDown = (event) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
      moved: false,
    };
    setPaused(true);
    scroller.setPointerCapture?.(event.pointerId);
  };

  const onPointerMove = (event) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || !drag.active) return;

    const delta = event.clientX - drag.startX;
    if (Math.abs(delta) > 4) drag.moved = true;
    scroller.scrollLeft = drag.scrollLeft - delta;
  };

  const endDrag = (event) => {
    const scroller = scrollerRef.current;
    const drag = dragRef.current;
    if (!scroller || !drag.active) return;

    drag.active = false;
    scroller.releasePointerCapture?.(event.pointerId);

    const delta = event.clientX - drag.startX;
    if (drag.moved && Math.abs(delta) >= DRAG_THRESHOLD) {
      if (delta < 0) goNext();
      else goPrev();
    } else if (!drag.moved) {
      const rect = scroller.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      if (clickX < rect.width / 2) goPrev();
      else goNext();
    } else {
      const slide = scroller.children[index];
      if (slide) {
        scroller.scrollTo({
          left: slide.offsetLeft - scroller.offsetLeft,
          behavior: 'smooth',
        });
      }
    }

    window.setTimeout(() => setPaused(false), 400);
  };

  if (!count) return null;

  const items = images.map((item) =>
    typeof item === 'string' ? { image: item, alt: '' } : item
  );
  const dotCount = maxIndex + 1;

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex cursor-grab items-start gap-3 overflow-x-hidden active:cursor-grabbing sm:gap-4 md:gap-5"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {items.map((item) => (
            <div
              key={item.image}
              className={`${slideWidthClass} shrink-0 select-none`}
            >
              <img
                className={`pointer-events-none rounded-lg ${imageClassName}`}
                src={item.image}
                alt={item.alt}
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {count > visibleCount && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={goPrev}
              className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-ink-2 shadow-sm transition-opacity hover:opacity-100 md:left-3 md:opacity-80"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={goNext}
              className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-ink-2 shadow-sm transition-opacity hover:opacity-100 md:right-3 md:opacity-80"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {dotCount > 1 && (
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Showcase slides">
          {Array.from({ length: dotCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-brand-ink-2' : 'w-1.5 bg-brand-gray-400 hover:bg-brand-ink-2/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
