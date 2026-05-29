"use client";

import SkeletonBlock from "../SkeletonBlock";
import SkeletonForm from "../SkeletonForm";
import SkeletonText from "../SkeletonText";

export default function ContactPageSkeleton() {
  return (
    <main className="section contact-hero-section pt-24 sm:pt-28" aria-busy="true">
      <div className="container space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <SkeletonText lines={2} lineHeight={16} lastLineWidth="65%" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonBlock key={i} height={44} width="100%" borderRadius={999} />
          ))}
        </div>
        <SkeletonForm fieldCount={8} showStepper />
      </div>
    </main>
  );
}
