"use client";

import type { ReactNode } from "react";
import MobileSwipeCarousel from "./MobileSwipeCarousel";

type ResponsiveCardSectionProps = {
  children: ReactNode;
  desktopClassName?: string;
  mobileClassName?: string;
  carouselAriaLabel?: string;
  showCounter?: boolean;
  loop?: boolean;
};

export default function ResponsiveCardSection({
  children,
  desktopClassName = "hidden lg:grid",
  mobileClassName = "lg:hidden",
  carouselAriaLabel,
  showCounter = true,
  loop = true,
}: ResponsiveCardSectionProps) {
  return (
    <>
      <div className={desktopClassName}>{children}</div>
      <MobileSwipeCarousel
        className={mobileClassName}
        aria-label={carouselAriaLabel}
        showCounter={showCounter}
        loop={loop}
      >
        {children}
      </MobileSwipeCarousel>
    </>
  );
}
