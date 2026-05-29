"use client";

import { useState } from "react";
import SkeletonBlock from "./SkeletonBlock";
import SkeletonTheme from "./SkeletonTheme";

type CarouselImageSkeletonProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function CarouselImageSkeleton({
  src,
  alt,
  className = "w-full h-full object-cover block",
}: CarouselImageSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full w-full bg-[var(--bg-elev)]">
      {!loaded && (
        <div className="absolute inset-0 z-10">
          <SkeletonTheme>
            <SkeletonBlock
              width="100%"
              height="100%"
              borderRadius={0}
              containerClassName="h-full w-full [&_span]:!block [&_span]:!h-full"
            />
          </SkeletonTheme>
        </div>
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
