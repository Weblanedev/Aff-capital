"use client";

import SkeletonBlock from "./SkeletonBlock";
import type { SkeletonImageProps } from "./types";

const aspectClasses: Record<
  NonNullable<SkeletonImageProps["aspectRatio"]>,
  string
> = {
  video: "aspect-video",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
  hero: "aspect-[16/10] min-h-[280px] sm:min-h-[400px]",
};

export default function SkeletonImage({
  width = "100%",
  height,
  aspectRatio = "video",
  borderRadius = 16,
  className = "",
}: SkeletonImageProps) {
  if (height) {
    return (
      <SkeletonBlock
        width={width}
        height={height}
        borderRadius={borderRadius}
        className={className}
        containerClassName="block w-full"
      />
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden ${aspectClasses[aspectRatio]} ${className}`}
    >
      <SkeletonBlock
        width="100%"
        height="100%"
        borderRadius={borderRadius}
        containerClassName="absolute inset-0 block h-full w-full [&_.react-loading-skeleton]:!h-full"
      />
    </div>
  );
}
