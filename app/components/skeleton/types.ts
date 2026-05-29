export type SkeletonBlockProps = {
  width?: number | string;
  height?: number | string;
  count?: number;
  circle?: boolean;
  borderRadius?: number | string;
  className?: string;
  inline?: boolean;
  containerClassName?: string;
};

export type SkeletonTextProps = {
  lines?: number;
  lineHeight?: number;
  lastLineWidth?: string | number;
  className?: string;
};

export type SkeletonImageProps = {
  width?: number | string;
  height?: number | string;
  aspectRatio?: "video" | "square" | "portrait" | "wide" | "hero";
  borderRadius?: number | string;
  className?: string;
};

export type SkeletonButtonProps = {
  count?: number;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

export type SkeletonCardProps = {
  count?: number;
  hasImage?: boolean;
  imageHeight?: number;
  lines?: number;
  className?: string;
};

export type SkeletonSectionProps = {
  hasLabel?: boolean;
  titleWidth?: string | number;
  descriptionLines?: number;
  children?: import("react").ReactNode;
  className?: string;
};

export type PageSkeletonVariant =
  | "home"
  | "thesis"
  | "sectors"
  | "portfolio"
  | "contact";

export type PageSkeletonProps = {
  variant: PageSkeletonVariant;
  /** Minimum display time (ms) — used for accessibility label timing. */
  delayMs?: number;
};

export type PageContentProps = {
  children: import("react").ReactNode;
  /** Minimum skeleton display before revealing page content (default 3000ms). */
  delayMs?: number;
};
