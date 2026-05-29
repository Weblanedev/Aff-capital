"use client";

import SkeletonCard from "../SkeletonCard";
import SkeletonHero from "../SkeletonHero";
import SkeletonSection from "../SkeletonSection";
import SkeletonBlock from "../SkeletonBlock";

export default function HomePageSkeleton() {
  return (
    <div className="skeleton-page" aria-busy="true" aria-label="Loading page">
      <SkeletonHero />
      <hr className="section-divider opacity-30" />
      <SkeletonSection titleWidth="65%">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 overflow-hidden"
            >
              <SkeletonBlock height={160} width="100%" borderRadius={0} />
              <div className="p-5 space-y-3">
                <SkeletonBlock height={22} width="70%" />
                <SkeletonBlock height={14} width="100%" count={2} />
              </div>
            </div>
          ))}
        </div>
      </SkeletonSection>
      <hr className="section-divider opacity-30" />
      <SkeletonSection titleWidth="40%">
        <SkeletonCard count={1} hasImage={false} lines={4} />
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonBlock key={i} width={10} height={10} circle />
          ))}
        </div>
      </SkeletonSection>
      <hr className="section-divider opacity-30" />
      <SkeletonSection titleWidth="55%">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <SkeletonCard count={2} hasImage={false} lines={3} />
          <SkeletonBlock height={320} width="100%" borderRadius={16} />
        </div>
      </SkeletonSection>
    </div>
  );
}
