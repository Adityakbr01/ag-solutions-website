import type { AnchorHTMLAttributes, ReactNode } from "react";
import { HomeIcon } from "./HomeIcon";

interface HomeButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  showArrow?: boolean;
  variant?: "primary" | "ghost";
}

const variantClasses = {
  primary:
    "bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:ring-accent",
  ghost:
    "border border-border text-foreground hover:border-accent/50 hover:bg-accent/10 focus-visible:ring-accent dark:border-white/15 dark:text-[#fafaf8] dark:hover:border-white/40 dark:hover:bg-white/[0.04]",
};

export function HomeButtonLink({
  children,
  className = "",
  showArrow = true,
  variant = "primary",
  ...props
}: HomeButtonLinkProps) {
  return (
    <a
      className={`relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full px-7 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {showArrow ? (
        <HomeIcon name="arrowRight" className="relative z-10 h-4 w-4" />
      ) : null}
    </a>
  );
}
