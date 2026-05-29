"use client";

import { SkeletonTheme as LibSkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BASE = "#2a3a62";
const HIGHLIGHT = "#3d5080";

export default function SkeletonTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LibSkeletonTheme
      baseColor={BASE}
      highlightColor={HIGHLIGHT}
      borderRadius={10}
      duration={1.4}
    >
      {children}
    </LibSkeletonTheme>
  );
}
