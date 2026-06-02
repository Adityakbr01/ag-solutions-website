interface SectionHeaderProps {
  align?: "left" | "split";
  description?: string;
  eyebrow: string;
  title: string;
}

export function SectionHeader({
  align = "left",
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  const titleLines = title.split("\n");

  return (
    <div
      className={
        align === "split"
          ? "mb-14 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end"
          : "mb-12 max-w-3xl"
      }
    >
      <div>
        <p className="section-header-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-accent-strong dark:text-accent">
          {eyebrow}
        </p>
        <h2 className="section-header-title font-display text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl">
          {titleLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h2>
      </div>
      {description ? (
        <p className="section-header-description max-w-xl text-base font-light leading-7 text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
