import React from "react";

type CarouselProps = {
  children: React.ReactNode[];
  autoPlayMs?: number;
  height?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
};

export default function Carousel({
  children,
  autoPlayMs = 4500,
  height = 260,
  showIndicators = true,
  showArrows = false,
}: CarouselProps): JSX.Element {
  const [index, setIndex] = React.useState(0);
  const count = React.Children.count(children);

  React.useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [count, autoPlayMs]);

  const goTo = (i: number) => setIndex(i % count);
  const goToNext = () => goTo(index + 1);
  const goToPrev = () => goTo(index - 1);

  return (
    <div
      className="carousel"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 16,
        border: "1px solid var(--border)",
        background: "var(--card)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: `${count * 100}%`,
          transform: `translateX(-${(index * 100) / count}%)`,
          transition: "transform 800ms cubic-bezier(0.4, 0, 0.2, 1)",
          height,
        }}
      >
        {React.Children.map(children, (child, i) => (
          <div style={{ width: `${100 / count}%`, height: "100%" }} key={i}>
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && count > 1 && (
        <>
          <button
            onClick={goToPrev}
            aria-label="Previous slide"
            className="btn"
            style={{
              position: "absolute",
              left: 16,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.7)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.5)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            ←
          </button>
          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="btn"
            style={{
              position: "absolute",
              right: 16,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.7)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.5)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            →
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && count > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 8,
            zIndex: 10,
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="btn"
              style={{
                width: 12,
                height: 12,
                padding: 0,
                borderRadius: 999,
                border: "2px solid rgba(255,255,255,0.3)",
                background:
                  i === index
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (i !== index) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.4)";
                  e.currentTarget.style.transform = "scale(1.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (i !== index) {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "scale(1)";
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
