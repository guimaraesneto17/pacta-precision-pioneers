import { useState } from "react";

interface SkeletonImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  skeletonClassName?: string;
}

export function SkeletonImage({ className, skeletonClassName, onLoad, ...props }: SkeletonImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className={`absolute inset-0 bg-muted animate-pulse ${skeletonClassName ?? ""}`} />
      )}
      <img
        {...props}
        className={`${className ?? ""} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
      />
    </div>
  );
}
