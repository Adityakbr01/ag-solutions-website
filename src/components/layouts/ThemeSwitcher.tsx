import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
  { label: "System", value: "system" },
] as const;

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme = "system" } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col gap-3 md:items-end">
      <span className="font-display text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
        Theme
      </span>
      <div
        aria-label="Theme preference"
        className="inline-grid grid-cols-3 rounded-lg border border-border bg-muted p-1 text-xs font-semibold text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.04]"
        role="group"
      >
        {themeOptions.map((option) => {
          const isActive = mounted && theme === option.value;

          return (
            <button
              type="button"
              aria-pressed={isActive}
              className={`min-h-9 rounded-md px-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "hover:bg-background hover:text-foreground dark:hover:bg-white/[0.08] dark:hover:text-[#fafaf8]"
              }`}
              key={option.value}
              onClick={() => setTheme(option.value)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
