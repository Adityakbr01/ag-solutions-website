export default function ScrollIndicatorArrow() {
  return (
    <a
      href="#services"
      className="scroll-indicator-mouse group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-1"
      aria-label="Scroll to Services"
    >
      <div className="flex h-10 w-6 items-start justify-center rounded-full border border-foreground/30 bg-background/50 p-1.5 transition-colors duration-300 group-hover:border-accent dark:border-white/20 dark:group-hover:border-accent">
        <div className="scroll-indicator-dot h-1.5 w-1 rounded-full bg-foreground/60 transition-colors duration-300 group-hover:bg-accent dark:bg-white/70 dark:group-hover:bg-accent" />
      </div>

      <svg
        aria-hidden="true"
        className="mt-1.5 h-3 w-3 animate-pulse text-foreground/40 transition-colors duration-300 group-hover:text-accent dark:text-white/40 dark:group-hover:text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </a>
  );
}
