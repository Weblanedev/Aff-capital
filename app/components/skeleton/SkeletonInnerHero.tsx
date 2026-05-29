"use client";

import SkeletonBlock from "./SkeletonBlock";
import SkeletonText from "./SkeletonText";

export default function SkeletonInnerHero() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-[var(--bg-elev)]">
      <div className="container text-center space-y-6">
        <SkeletonBlock
          height={48}
          width="min(90%, 520px)"
          borderRadius={8}
          containerClassName="mx-auto block w-full max-w-xl"
        />
        <SkeletonText
          lines={2}
          lineHeight={16}
          lastLineWidth="70%"
          className="max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}
