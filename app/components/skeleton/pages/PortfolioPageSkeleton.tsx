"use client";

import SkeletonInnerHero from "../SkeletonInnerHero";
import SkeletonSection from "../SkeletonSection";
import SkeletonCard from "../SkeletonCard";

export default function PortfolioPageSkeleton() {
  return (
    <main className="min-h-screen bg-[var(--bg)]" aria-busy="true">
      <SkeletonInnerHero />
      <SkeletonSection className="bg-[var(--bg-elev)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <SkeletonCard count={2} imageHeight={100} lines={4} />
          <SkeletonCard count={2} imageHeight={100} lines={4} />
        </div>
      </SkeletonSection>
    </main>
  );
}
