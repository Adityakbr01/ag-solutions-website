import React from "react";

// ==========================================
// MAIN COMPONENT
// ==========================================
export interface MainProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
}

/**
 * Main Content wrapper. Focusable (without outline) to support skip-links properly.
 */
export const Main: React.FC<MainProps> = ({
  id = "main-content",
  children,
  className = "",
  ...props
}) => {
  return (
    <main
      id={id}
      tabIndex={-1}
      className={`focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </main>
  );
};

// ==========================================
// CONTAINER COMPONENT
// ==========================================
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

/**
 * Responsive layout container designed to maintain structural alignment and prevent layout shifts.
 */
export const Container: React.FC<ContainerProps> = ({
  fluid = false,
  children,
  className = "",
  ...props
}) => {
  const widthClass = fluid ? "w-full px-4" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";
  return (
    <div className={`${widthClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

// ==========================================
// SECTION COMPONENT
// ==========================================
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

/**
 * Semantic section tag. Requires either an aria-label or an aria-labelledby reference to serve as a document landmark.
 */
export const Section: React.FC<SectionProps> = ({
  ariaLabel,
  ariaLabelledBy,
  children,
  className = "",
  ...props
}) => {
  return (
    <section
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={`py-12 md:py-20 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

// ==========================================
// HEADING COMPONENT
// ==========================================
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * Semantic Heading selector ensuring valid HTML structure.
 * Automatically maps to standard tailwind typography size hierarchies to respect visual structure.
 */
export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = "",
  ...props
}) => {
  const Tag = `h${level}` as const;

  // Visual size classes mapping to semantic levels
  const sizeClasses = {
    1: "font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50",
    2: "font-display text-3xl md:text-4xl font-bold tracking-tight text-neutral-950 dark:text-neutral-100",
    3: "font-display text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-200",
    4: "font-display text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-200",
    5: "font-display text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-300",
    6: "font-display text-base md:text-lg font-medium text-neutral-800 dark:text-neutral-350",
  };

  return (
    <Tag className={`${sizeClasses[level]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

// ==========================================
// TEXT COMPONENT
// ==========================================
export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div" | "small" | "strong" | "em";
  variant?: "body" | "lead" | "caption" | "small";
}

/**
 * Versatile typography block for general text elements, implementing readable font sizes and color weights.
 */
export const Text: React.FC<TextProps> = ({
  as: Tag = "p",
  variant = "body",
  children,
  className = "",
  ...props
}) => {
  const variantClasses = {
    lead: "text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed font-light",
    body: "text-base text-neutral-700 dark:text-neutral-300 leading-relaxed",
    caption: "text-sm text-neutral-500 dark:text-neutral-400",
    small: "text-xs text-neutral-400 dark:text-neutral-500",
  };

  return (
    <Tag className={`${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
};

// ==========================================
// ARTICLE COMPONENT
// ==========================================
export type ArticleProps = React.HTMLAttributes<HTMLElement>;

export const Article: React.FC<ArticleProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <article className={`prose dark:prose-invert max-w-none ${className}`} {...props}>
      {children}
    </article>
  );
};

// ==========================================
// ASIDE COMPONENT
// ==========================================
export interface AsideProps extends React.HTMLAttributes<HTMLElement> {
  ariaLabel?: string;
}

export const Aside: React.FC<AsideProps> = ({
  ariaLabel,
  children,
  className = "",
  ...props
}) => {
  return (
    <aside
      aria-label={ariaLabel}
      className={`bg-neutral-50 dark:bg-neutral-900 p-6 rounded-lg border border-neutral-200/60 dark:border-neutral-800/80 ${className}`}
      {...props}
    >
      {children}
    </aside>
  );
};

// ==========================================
// NAV COMPONENT
// ==========================================
export interface NavProps extends React.HTMLAttributes<HTMLElement> {
  ariaLabel: string; // REQUIRED for identifying different navigation landmarks
}

export const Nav: React.FC<NavProps> = ({
  ariaLabel,
  children,
  className = "",
  ...props
}) => {
  return (
    <nav
      aria-label={ariaLabel}
      className={`${className}`}
      {...props}
    >
      {children}
    </nav>
  );
};

// ==========================================
// FOOTER COMPONENT
// ==========================================
export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FC<FooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <footer
      className={`bg-neutral-950 text-neutral-400 border-t border-neutral-900 py-12 ${className}`}
      {...props}
    >
      {children}
    </footer>
  );
};
