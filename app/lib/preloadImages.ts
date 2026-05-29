/** Warm browser cache for image URLs (e.g. during skeleton display). */
export function preloadImages(urls: readonly string[]): void {
  if (typeof window === "undefined") return;
  urls.forEach((src) => {
    const img = new window.Image();
    img.src = src;
  });
}
