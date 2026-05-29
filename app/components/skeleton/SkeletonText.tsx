"use client";

import SkeletonBlock from "./SkeletonBlock";
import type { SkeletonTextProps } from "./types";

export default function SkeletonText({
  lines = 3,
  lineHeight = 16,
  lastLineWidth = "70%",
  className = "",
}: SkeletonTextProps) {
  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBlock
          key={i}
          height={lineHeight}
          width={i === lines - 1 ? lastLineWidth : "100%"}
          borderRadius={6}
        />
      ))}
    </div>
  );
}
