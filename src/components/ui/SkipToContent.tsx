import React from "react";

interface SkipToContentProps {
  /**
   * The element ID to skip to. Defaults to 'main-content'.
   */
  targetId?: string;
  className?: string;
}

/**
 * WCAG-compliant skip link component for keyboard navigation.
 * Remains visually hidden off-screen until it receives keyboard focus.
 */
export const SkipToContent: React.FC<SkipToContentProps> = ({
  targetId = "main-content",
  className = "",
}) => {
  return (
    <a
      href={`#${targetId}`}
      className={`absolute left-4 top-4 z-50 -translate-y-24 bg-blue-600 px-4 py-2 text-white font-medium rounded shadow-lg transition-transform duration-200 focus:translate-y-0 focus:outline focus:outline-4 focus:outline-blue-300 focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${className}`}
    >
      Skip to Main Content
    </a>
  );
};

export default SkipToContent;
