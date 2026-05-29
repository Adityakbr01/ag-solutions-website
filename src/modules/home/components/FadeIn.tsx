import type { HTMLAttributes } from "react";
import { useRevealOnScroll } from "../hook/useRevealOnScroll";

interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  eager?: boolean;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  eager = false,
  style,
  ...props
}: FadeInProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();
  const visible = eager || isVisible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
