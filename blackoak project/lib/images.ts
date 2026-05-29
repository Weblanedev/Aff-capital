// Lightweight runtime image resolver using Vite's import.meta.glob
// Place files under src/assets/** and reference them by relative paths like
// getAssetUrl('team/ada-okoye.jpg')

const modules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  as: 'url',
}) as Record<string, string>;

const assetMap: Map<string, string> = new Map();

for (const key of Object.keys(modules)) {
  // Normalize keys like '../assets/team/ada.jpg' → 'team/ada.jpg'
  const normalized = key.replace(/^\.\.\/assets\//, '');
  assetMap.set(normalized, modules[key]);
}

export function getAssetUrl(relativePath: string): string | undefined {
  return assetMap.get(relativePath);
}


