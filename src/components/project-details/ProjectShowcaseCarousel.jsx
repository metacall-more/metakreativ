import { useEffect, useRef, useState } from 'react';

const INTERVAL_MS = 2000;
const DRAG_THRESHOLD = 40;

const SLIDE_WIDTH = {
  2: 'w-[calc((100%-0.25rem)/2)]',
  3: 'w-[calc((100%-0.5rem)/3)]',
  4: 'w-[calc((100%-0.75rem)/4)]',
  5: 'w-[calc((100%-1rem)/5)]',
};

const SLIDE_WIDTH_GAP = {
  2: {
    'gap-px': 'w-[calc((100%-1px)/2)]',
    'gap-3': 'w-[calc((100%-0.75rem)/2)] sm:w-[calc((100%-1rem)/2)] md:w-[calc((100%-1.25rem)/2)]',
    'gap-5': 'w-[calc((100%-1.25rem)/2)]',
    'gap-6': 'w-[calc((100%-1.5rem)/2)]',
  },
  3: {
    'gap-px': 'w-[calc((100%-2px)/3)]',
  },
  4: {
    'gap-px': 'w-[calc((100%-3px)/4)]',
    'gap-3': 'w-[calc((100%-2.25rem)/4)] sm:w-[calc((100%-3rem)/4)] md:w-[calc((100%-3.75rem)/4)]',
    'gap-5': 'w-[calc((100%-3.75rem)/4)] sm:w-[calc((100%-5rem)/4)]',
    'gap-6': 'w-[calc((100%-4.5rem)/4)]',
  },
  5: {
    'gap-px': 'w-[calc((100%-4px)/5)]',
  },
};

/**
 * Auto-advancing strip: shows `visible` images, advances one-by-one every 2s,
 * supports mouse drag + click / arrow navigation.
 * With `infinite`, slides loop seamlessly forever.
 */
export default function ProjectShowcaseCarousel({
  images,
  items: itemsProp,
  renderItem,
  visible = 2,
  className = 'mt-10 md:mt-14',
  imageClassName = 'h-auto w-full object-contain',
  gapClass = 'gap-3 sm:gap-4 md:gap-5',
  rounded = true,
  fullBleed = false,
  hideDots = false,
  hideArrows = false,
  infinite = false,
  clickToNavigate = true,
}) {
  const scrollerRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const skipSmoothRef = useRef(false);
  const source = itemsProp ?? images;
  const count = source?.length ?? 0;
  const visibleCount = Math.min(visible, Math.max(count, 1));
  const canLoop = infinite && count > visibleCount;
  const startIndex = canLoop ? count : 0;
  const [index, setIndex] = useState(startIndex);
  const [paused, setPaused] = useState(false);
  const maxIndex = canLoop ? count * 2 - 1 : Math.max(0, count - visibleCount);
  const minIndex = canLoop ? count : 0;
  const primaryGap = gapClass.split(' ')[0];
  const slideWidthClass =
    SLIDE_WIDTH_GAP[visibleCount]?.[primaryGap] ?? SLIDE_WIDTH[visibleCount] ?? SLIDE_WIDTH[2];

  const normalizeItems = (list) =>
    (list ?? []).map((item) => (typeof item === 'string' ? { image: item, alt: '' } : item));

  const baseItems = normalizeItems(source);
  const items = canLoop ? [...baseItems, ...baseItems, ...baseItems] : baseItems;

  const goTo = (next, { instant = false } = {}) => {
    if (count <= 1) return;

    if (!canLoop) {
      let value = next;
      if (value > maxIndex) value = 0;
      if (value < 0) value = maxIndex;
      if (instant) skipSmoothRef.current = true;
      setIndex(value);
      return;
    }

    if (instant) skipSmoothRef.current = true;
    setIndex(next);
  };

  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  useEffect(() => {
    if (canLoop) {
      setIndex(count);
      skipSmoothRef.current = true;
      return;
    }
    setIndex((current) => Math.min(current, maxIndex));
  }, [canLoop, count, maxIndex]);

  useEffect(() => {
    if (count <= visibleCount || paused) return undefined;

    const id = window.setInterval(() => {
      setIndex((current) => {
        if (!canLoop) return current >= maxIndex ? 0 : current + 1;
        return current + 1;
      });
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [count, paused, maxIndex, visibleCount, canLoop]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || items.length === 0) return;

    const slide = scroller.children[index];
    if (!slide) return;

    const behavior = skipSmoothRef.current ? 'auto' : 'smooth';
    skipSmoothRef.current = false;

    scroller.scrollTo({
      left: slide.offsetLeft - scroller.offsetLeft,
      behavior,
    });

    if (!canLoop) return;

    // After sliding into the third copy, jump back to the middle copy.
    if (index >= count * 2) {
      const resetTo = index - count;
      const timer = window.setTimeout(() => {
        skipSmoothRef.current = true;
        setIndex(resetTo);
      }, 350);
      return () => window.clearTimeout(timer);
    }

    // After sliding into the first copy (going backward), jump to the middle copy.
    if (index < count) {
      const resetTo = index + count;
      const timer = window.setTimeout(() => {
        skipSmoothRef.current = true;
        setIndex(resetTo);
      }, 350);
      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [index, items.length, canLoop, count]);

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
    } else if (!drag.moved && clickToNavigate) {
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

  const activeDot = canLoop ? ((index % count) + count) % count : index;
  const dotCount = canLoop ? count : maxIndex + 1;
  const showControls = count > visibleCount;

  return (
    <div
      className={className}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`relative ${fullBleed ? 'w-screen max-w-[100vw] relative left-1/2 -translate-x-1/2' : ''}`}>
        <div
          ref={scrollerRef}
          className={`flex cursor-grab items-start overflow-x-hidden active:cursor-grabbing ${gapClass}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        >
          {items.map((item, i) => (
            <div
              key={`${item.slug ?? item.image ?? item.title ?? 'slide'}-${i}`}
              className={`${slideWidthClass} shrink-0 select-none`}
            >
              {renderItem ? (
                renderItem(item, i)
              ) : (
                <img
                  className={`pointer-events-none ${rounded ? 'rounded-lg' : 'rounded-none'} ${imageClassName}`}
                  src={item.image}
                  alt={item.alt}
                  draggable={false}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        {!hideArrows && showControls && (
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

      {!hideDots && showControls && dotCount > 1 && (
        <div className="mt-5 flex justify-center gap-2" role="tablist" aria-label="Showcase slides">
          {Array.from({ length: canLoop ? count : dotCount }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === (canLoop ? activeDot : index)}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => goTo(canLoop ? minIndex + i : i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === (canLoop ? activeDot : index)
                  ? 'w-6 bg-brand-ink-2'
                  : 'w-1.5 bg-brand-gray-400 hover:bg-brand-ink-2/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
