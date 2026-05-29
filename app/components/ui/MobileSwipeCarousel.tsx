"use client";

import {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const SWIPE_THRESHOLD = 48;

type MobileSwipeCarouselProps = {
  children: ReactNode;
  loop?: boolean;
  className?: string;
  showCounter?: boolean;
  "aria-label"?: string;
};

export default function MobileSwipeCarousel({
  children,
  loop = true,
  className = "",
  showCounter = true,
  "aria-label": ariaLabel = "Swipeable cards",
}: MobileSwipeCarouselProps) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [offsetPx, setOffsetPx] = useState(0);
  const [animating, setAnimating] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<{ x: number; y: number } | null>(null);
  const isHorizontalRef = useRef(false);
  const offsetRef = useRef(0);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    offsetRef.current = offsetPx;
  }, [offsetPx]);

  const clampIndex = useCallback(
    (i: number) => {
      if (loop) return ((i % count) + count) % count;
      return Math.max(0, Math.min(count - 1, i));
    },
    [count, loop]
  );

  const goTo = useCallback(
    (i: number) => {
      setAnimating(true);
      setOffsetPx(0);
      setIndex(clampIndex(i));
    },
    [clampIndex]
  );

  const goNext = useCallback(() => {
    if (!loop && indexRef.current >= count - 1) return;
    goTo(indexRef.current + 1);
  }, [count, goTo, loop]);

  const goPrev = useCallback(() => {
    if (!loop && indexRef.current <= 0) return;
    goTo(indexRef.current - 1);
  }, [goTo, loop]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || count <= 1) return;

    const onTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      startRef.current = { x: touch.clientX, y: touch.clientY };
      isHorizontalRef.current = false;
      setAnimating(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!startRef.current) return;
      const touch = e.touches[0];
      const dx = touch.clientX - startRef.current.x;
      const dy = touch.clientY - startRef.current.y;

      if (!isHorizontalRef.current) {
        if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
        isHorizontalRef.current = Math.abs(dx) > Math.abs(dy);
      }

      if (!isHorizontalRef.current) return;

      if (e.cancelable) e.preventDefault();

      let bounded = dx;
      const currentIndex = indexRef.current;
      if (!loop) {
        if (currentIndex === 0 && dx > 0) bounded = dx * 0.35;
        if (currentIndex === count - 1 && dx < 0) bounded = dx * 0.35;
      }
      setOffsetPx(bounded);
    };

    const onTouchEnd = () => {
      const dx = offsetRef.current;
      if (dx < -SWIPE_THRESHOLD) goNext();
      else if (dx > SWIPE_THRESHOLD) goPrev();
      setOffsetPx(0);
      setAnimating(true);
      startRef.current = null;
      isHorizontalRef.current = false;
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, [count, goNext, goPrev, loop]);

  if (count === 0) return null;

  const canGoPrev = loop || index > 0;
  const canGoNext = loop || index < count - 1;

  return (
    <div className={className} role="region" aria-label={ariaLabel}>
      <div
        ref={containerRef}
        className="overflow-hidden select-none"
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(-${index * 100}% + ${offsetPx}px))`,
            transition: animating
              ? "transform 320ms cubic-bezier(0.4, 0, 0.2, 1)"
              : "none",
          }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full shrink-0"
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={!canGoPrev}
              aria-label="Previous slide"
              className="flex h-11 w-11 shrink-0 items-center justify-center border-0 bg-transparent p-0 text-3xl font-light leading-none text-[var(--text)] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25"
            >
              ‹
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "h-2.5 w-7 bg-[var(--accent)]"
                      : "h-2.5 w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next slide"
              className="flex h-11 w-11 shrink-0 items-center justify-center border-0 bg-transparent p-0 text-3xl font-light leading-none text-[var(--text)] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-25"
            >
              ›
            </button>
          </div>

          {showCounter && (
            <p className="mt-3 text-center text-sm text-[var(--muted)]">
              {index + 1} of {count}
            </p>
          )}
        </>
      )}
    </div>
  );
}
