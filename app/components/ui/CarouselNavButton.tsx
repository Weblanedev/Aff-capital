"use client";

type CarouselNavButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  visible?: boolean;
  className?: string;
  "aria-label": string;
};

export default function CarouselNavButton({
  direction,
  onClick,
  disabled = false,
  visible = true,
  className = "",
  "aria-label": ariaLabel,
}: CarouselNavButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-2xl font-light leading-none transition-all duration-300 ${
        direction === "prev" ? "left-2" : "right-2"
      } ${visible ? "opacity-100" : "opacity-0"} hover:bg-black/40 hover:border-white/40 disabled:opacity-30 disabled:cursor-not-allowed ${className}`}
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
}
