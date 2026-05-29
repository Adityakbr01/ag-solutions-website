import type { HTMLAttributes } from "react";
import { useRevealOnScroll } from "../hook/useRevealOnScroll";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}: FadeInProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
