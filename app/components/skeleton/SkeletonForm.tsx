"use client";

import SkeletonBlock from "./SkeletonBlock";
import SkeletonButton from "./SkeletonButton";
import SkeletonText from "./SkeletonText";

type SkeletonFormProps = {
  fieldCount?: number;
  showStepper?: boolean;
  className?: string;
};

export default function SkeletonForm({
  fieldCount = 6,
  showStepper = true,
  className = "",
}: SkeletonFormProps) {
  return (
    <div
      className={`grid gap-8 lg:gap-12 ${
        showStepper ? "lg:grid-cols-[240px_1fr]" : "grid-cols-1"
      } ${className}`}
    >
      {showStepper && (
        <div className="space-y-4 hidden lg:block">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 items-start">
              <SkeletonBlock width={44} height={44} circle />
              <div className="flex-1 space-y-2 pt-1">
                <SkeletonBlock height={12} width={56} />
                <SkeletonBlock height={18} width="80%" />
                <SkeletonBlock height={14} width="90%" />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <SkeletonBlock height={28} width="45%" />
          <SkeletonText lines={1} lineHeight={14} lastLineWidth="60%" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: fieldCount }).map((_, i) => (
            <div
              key={i}
              className={i === fieldCount - 1 && fieldCount % 2 === 1 ? "sm:col-span-2" : ""}
            >
              <SkeletonBlock height={48} width="100%" borderRadius={10} />
            </div>
          ))}
        </div>
        <SkeletonButton count={1} size="lg" fullWidth />
      </div>
    </div>
  );
}
