"use client";

import { useEffect, useState } from "react";
import { HERO_CAROUSEL } from "../../lib/assets";
import { preloadImages } from "../../lib/preloadImages";
import { DEFAULT_PAGE_SKELETON_DELAY_MS } from "./constants";

export type UsePageReadyOptions = {
  /** Route key — resets the timer when navigation changes. */
  resetKey?: string;
  /** Minimum skeleton display time in ms (default 3000). */
  delayMs?: number;
};

/**
 * Shows skeleton for `delayMs`, preloading hero images during that window,
 * then reveals the page.
 */
export function usePageReady({
  resetKey = "",
  delayMs = DEFAULT_PAGE_SKELETON_DELAY_MS,
}: UsePageReadyOptions = {}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);
    preloadImages(HERO_CAROUSEL);

    let cancelled = false;
    const timer = window.setTimeout(() => {
      if (!cancelled) setReady(true);
    }, delayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [resetKey, delayMs]);

  return ready;
}
