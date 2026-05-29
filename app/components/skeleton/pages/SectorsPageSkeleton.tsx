"use client";

import SkeletonInnerHero from "../SkeletonInnerHero";
import SkeletonSection from "../SkeletonSection";
import SkeletonCard from "../SkeletonCard";
import SkeletonImage from "../SkeletonImage";

export default function SectorsPageSkeleton() {
  return (
    <main className="min-h-screen bg-[var(--bg)]" aria-busy="true">
      <SkeletonInnerHero />
      <SkeletonSection>
        <SkeletonCard count={4} imageHeight={140} lines={3} />
      </SkeletonSection>
      <SkeletonSection className="bg-[var(--bg-elev)]">
        <SkeletonImage aspectRatio="wide" borderRadius={16} />
      </SkeletonSection>
    </main>
  );
}
