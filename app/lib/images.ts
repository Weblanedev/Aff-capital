/** Public asset URLs for images under /public/assets */
export function getAssetUrl(relativePath: string): string {
  return `/assets/${relativePath}`;
}
