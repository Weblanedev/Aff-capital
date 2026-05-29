"use client";

import SkeletonBlock from "./SkeletonBlock";
import SkeletonText from "./SkeletonText";
import type { SkeletonSectionProps } from "./types";

export default function SkeletonSection({
  hasLabel = true,
  titleWidth = "50%",
  descriptionLines = 2,
  children,
  className = "",
}: SkeletonSectionProps) {
  return (
    <section className={`section py-16 sm:py-20 ${className}`}>
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-10 sm:mb-14">
          <div className="flex-1 max-w-2xl space-y-4">
            {hasLabel && (
              <SkeletonBlock height={28} width={140} borderRadius={999} />
            )}
            <SkeletonBlock height={36} width={titleWidth} borderRadius={8} />
            <SkeletonText
              lines={descriptionLines}
              lineHeight={14}
              lastLineWidth="75%"
            />
          </div>
          <SkeletonBlock
            width={56}
            height={56}
            circle
            className="hidden sm:block shrink-0"
          />
        </div>
        {children}
      </div>
    </section>
  );
}
