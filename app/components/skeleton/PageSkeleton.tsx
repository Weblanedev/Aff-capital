"use client";

import type { ComponentType } from "react";
import SkeletonTheme from "./SkeletonTheme";
import type { PageSkeletonProps, PageSkeletonVariant } from "./types";
import { DEFAULT_PAGE_SKELETON_DELAY_MS } from "./constants";
import HomePageSkeleton from "./pages/HomePageSkeleton";
import ThesisPageSkeleton from "./pages/ThesisPageSkeleton";
import SectorsPageSkeleton from "./pages/SectorsPageSkeleton";
import PortfolioPageSkeleton from "./pages/PortfolioPageSkeleton";
import ContactPageSkeleton from "./pages/ContactPageSkeleton";

const pages: Record<PageSkeletonVariant, ComponentType> = {
  home: HomePageSkeleton,
  thesis: ThesisPageSkeleton,
  sectors: SectorsPageSkeleton,
  portfolio: PortfolioPageSkeleton,
  contact: ContactPageSkeleton,
};

export function pathnameToSkeletonVariant(pathname: string): PageSkeletonVariant {
  if (pathname.startsWith("/thesis")) return "thesis";
  if (pathname.startsWith("/sectors")) return "sectors";
  if (pathname.startsWith("/portfolio")) return "portfolio";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}

export default function PageSkeleton({
  variant,
  delayMs = DEFAULT_PAGE_SKELETON_DELAY_MS,
}: PageSkeletonProps) {
  const Page = pages[variant];
  return (
    <SkeletonTheme>
      <div
        className="skeleton-page"
        aria-busy="true"
        aria-label={`Loading page content, please wait ${Math.round(delayMs / 1000)} seconds`}
      >
        <Page />
      </div>
    </SkeletonTheme>
  );
}
