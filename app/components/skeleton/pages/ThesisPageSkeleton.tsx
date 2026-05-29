"use client";

import SkeletonInnerHero from "../SkeletonInnerHero";
import SkeletonSection from "../SkeletonSection";
import SkeletonCard from "../SkeletonCard";
import SkeletonBlock from "../SkeletonBlock";

export default function ThesisPageSkeleton() {
  return (
    <main className="min-h-screen bg-[var(--bg)]" aria-busy="true">
      <SkeletonInnerHero />
      <SkeletonSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 p-6 space-y-4"
            >
              <SkeletonBlock width={48} height={48} circle />
              <SkeletonBlock height={24} width="80%" />
              <SkeletonBlock height={14} width="100%" count={3} />
            </div>
          ))}
        </div>
        <SkeletonCard count={3} imageHeight={100} lines={2} />
      </SkeletonSection>
      <SkeletonSection className="bg-[var(--bg-elev)]">
        <SkeletonBlock height={400} width="100%" borderRadius={16} />
      </SkeletonSection>
    </main>
  );
}
