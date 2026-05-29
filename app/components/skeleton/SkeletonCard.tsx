"use client";

import SkeletonBlock from "./SkeletonBlock";
import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";
import type { SkeletonCardProps } from "./types";

export default function SkeletonCard({
  count = 1,
  hasImage = true,
  imageHeight = 120,
  lines = 3,
  className = "",
}: SkeletonCardProps) {
  return (
    <div
      className={`grid gap-4 sm:gap-6 ${
        count > 1 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      } ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-2xl border border-white/10 bg-white/5 p-0 overflow-hidden"
        >
          {hasImage && (
            <SkeletonImage height={imageHeight} borderRadius={0} width="100%" />
          )}
          <div className="p-5 sm:p-6 space-y-4">
            <SkeletonBlock height={22} width="55%" borderRadius={6} />
            <SkeletonText lines={lines} lineHeight={14} lastLineWidth="80%" />
            <div className="flex gap-2 pt-1">
              <SkeletonBlock height={28} width={72} borderRadius={999} />
              <SkeletonBlock height={28} width={88} borderRadius={999} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
