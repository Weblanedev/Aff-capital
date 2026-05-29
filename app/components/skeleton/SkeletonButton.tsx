"use client";

import SkeletonBlock from "./SkeletonBlock";
import type { SkeletonButtonProps } from "./types";

const sizes = {
  sm: { height: 36, width: 100 },
  md: { height: 44, width: 140 },
  lg: { height: 52, width: 180 },
};

export default function SkeletonButton({
  count = 1,
  size = "md",
  fullWidth = false,
  className = "",
}: SkeletonButtonProps) {
  const { height, width } = sizes[size];

  return (
    <div
      className={`flex flex-wrap gap-3 ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonBlock
          key={i}
          height={height}
          width={fullWidth ? "100%" : width}
          borderRadius={fullWidth ? 10 : 999}
          containerClassName={fullWidth ? "flex-1 w-full" : ""}
        />
      ))}
    </div>
  );
}
