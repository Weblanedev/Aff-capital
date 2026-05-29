"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import SkeletonBlock from "./SkeletonBlock";
import SkeletonTheme from "./SkeletonTheme";

type ImageWithSkeletonProps = ImageProps & {
  skeletonClassName?: string;
};

export default function ImageWithSkeleton({
  skeletonClassName = "",
  className = "",
  onLoad,
  ...props
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${skeletonClassName}`}>
      {!loaded && (
        <div
          className={`absolute inset-0 z-10 ${skeletonClassName || "w-full h-full"}`}
        >
          <SkeletonTheme>
            <SkeletonBlock width="100%" height="100%" borderRadius={8} />
          </SkeletonTheme>
        </div>
      )}
      <Image
        {...props}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}
