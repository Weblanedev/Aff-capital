"use client";

import { usePathname } from "next/navigation";
import PageSkeleton, { pathnameToSkeletonVariant } from "./PageSkeleton";
import { DEFAULT_PAGE_SKELETON_DELAY_MS } from "./constants";
import { usePageReady } from "./usePageReady";
import type { PageContentProps } from "./types";

export default function PageContent({
  children,
  delayMs = DEFAULT_PAGE_SKELETON_DELAY_MS,
}: PageContentProps) {
  const pathname = usePathname();
  const variant = pathnameToSkeletonVariant(pathname);
  const ready = usePageReady({ resetKey: pathname, delayMs });

  if (!ready) {
    return (
      <div className="relative z-10 min-h-[50vh]" aria-busy="true">
        <PageSkeleton variant={variant} delayMs={delayMs} />
      </div>
    );
  }

  return <div className="page-content-enter min-w-0">{children}</div>;
}
