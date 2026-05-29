"use client";

import SkeletonBlock from "./SkeletonBlock";
import SkeletonButton from "./SkeletonButton";
import SkeletonText from "./SkeletonText";

export default function SkeletonHero({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative min-h-[85vh] sm:min-h-screen w-full ${className}`}
    >
      <SkeletonBlock
        height="100%"
        width="100%"
        borderRadius={0}
        containerClassName="absolute inset-0 min-h-[85vh] sm:min-h-screen"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative z-10 pt-28 sm:pt-36 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="space-y-6">
            <SkeletonBlock height={32} width={200} borderRadius={999} />
            <SkeletonBlock height={48} width="90%" borderRadius={8} />
            <SkeletonBlock height={48} width="70%" borderRadius={8} />
            <SkeletonText lines={3} lineHeight={14} lastLineWidth="85%" />
            <SkeletonButton count={2} size="lg" />
            <div className="flex flex-wrap gap-3">
              <SkeletonBlock height={28} width={120} borderRadius={999} />
              <SkeletonBlock height={28} width={100} borderRadius={999} />
              <SkeletonBlock height={28} width={130} borderRadius={999} />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-5">
              <SkeletonBlock height={28} width="60%" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <SkeletonBlock width={40} height={40} circle />
                  <div className="flex-1 space-y-2">
                    <SkeletonBlock height={18} width="40%" />
                    <SkeletonBlock height={14} width="70%" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
