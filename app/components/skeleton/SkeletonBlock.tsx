"use client";

import Skeleton from "react-loading-skeleton";
import type { SkeletonBlockProps } from "./types";

export default function SkeletonBlock({
  width,
  height,
  count = 1,
  circle = false,
  borderRadius,
  className = "",
  inline = false,
  containerClassName = "",
}: SkeletonBlockProps) {
  return (
    <span className={`skeleton-block-wrap block ${containerClassName}`.trim()}>
      <Skeleton
        width={width}
        height={height}
        count={count}
        circle={circle}
        borderRadius={borderRadius}
        className={className}
        inline={inline}
        containerClassName="skeleton-block"
      />
    </span>
  );
}
