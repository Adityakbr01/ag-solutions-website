import React, { useState, useEffect } from "react";

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // Enforce alt tag in TypeScript for WCAG accessibility
  width: number | string; // Enforce width to prevent Cumulative Layout Shift (CLS)
  height: number | string; // Enforce height to prevent Cumulative Layout Shift (CLS)
  priority?: boolean; // Set to true for hero images to optimize Largest Contentful Paint (LCP)
  aspectRatio?: string; // Optional custom aspect ratio style (e.g., '16/9', '4/3')
  wrapperClassName?: string;
}

/**
 * Performance-focused image component preventing Cumulative Layout Shift (CLS)
 * and supporting LCP optimizations. Enforces accessibility alt attributes.
 */
export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  aspectRatio,
  wrapperClassName = "",
  className = "",
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [errorOccurred, setErrorOccurred] = useState(false);

  // If the image is prioritized, we can preload it via link tags in the head
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [src, priority]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (props.onLoad) {
      props.onLoad(e);
    }
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setErrorOccurred(true);
    setIsLoaded(true); // Stop loading indicator
    if (props.onError) {
      props.onError(e);
    }
  };

  const containerStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    aspectRatio: aspectRatio,
    ...style,
  };

  return (
    <div
      style={containerStyle}
      className={`bg-neutral-100 dark:bg-neutral-800 rounded-lg transition-shadow duration-300 ${wrapperClassName}`}
    >
      {/* Premium Skeleton Loading States */}
      {!isLoaded && !errorOccurred && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 dark:from-neutral-850 dark:via-neutral-800 dark:to-neutral-850 animate-shimmer"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite linear",
          }}
          aria-hidden="true"
        />
      )}

      {/* Fallback UI if image fails to load */}
      {errorOccurred ? (
        <div
          className="absolute inset-0 flex items-center justify-center text-sm text-neutral-400 bg-neutral-200 dark:bg-neutral-800 p-2 text-center"
          role="img"
          aria-label={`Failed to load image: ${alt}`}
        >
          <span>Image Unavailable</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {/* Keyframe shimmer helper */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default LazyImage;
