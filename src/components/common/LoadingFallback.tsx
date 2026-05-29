import React from "react";

/**
 * Standard Loading indicator for lazy route loading and fallback boundaries.
 * Fully WCAG-accessible using appropriate role status wrappers.
 */
export const LoadingFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center min-h-[60vh] w-full gap-4"
    >
      {/* Premium Loader Graphics */}
      <div className="relative flex items-center justify-center">
        <div className="h-12 w-12 rounded-full border-4 border-blue-100 dark:border-blue-900" />
        <div className="absolute h-12 w-12 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
      </div>
      
      <span className="text-neutral-500 dark:text-neutral-400 font-medium text-sm">
        Loading content, please wait...
      </span>
      <span className="sr-only">Loading</span>
    </div>
  );
};

export default LoadingFallback;
