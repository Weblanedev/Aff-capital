"use client";

import Image from "next/image";

type AffIconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export default function AffIcon({
  src,
  alt,
  size = 32,
  className = "",
}: AffIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`object-contain shrink-0 ${className}`}
    />
  );
}
