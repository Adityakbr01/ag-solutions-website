import { contactInfo, footerColumns } from "@/modules/home/data/homeContent";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 py-14 text-muted-foreground transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#0a0a0a] md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <a
              href="/"
              className="font-display text-xl font-extrabold text-foreground"
            >
              AG<span className="text-accent-strong dark:text-accent">.</span>
              Solutions
            </a>
            <p className="mt-4 max-w-sm text-sm font-light leading-7">
              Single click solutions for all your web, mobile, and digital
              needs. Headquartered in Bengaluru, serving clients worldwide.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="mb-5 font-display text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
                {column.title}
              </h2>
              <div className="space-y-3">
                {column.links.map((link) => (
                  <a
                    href="/#contact"
                    className="block text-sm text-muted-foreground transition hover:text-foreground dark:text-white/60 dark:hover:text-[#fafaf8]"
                    key={link}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-7 text-xs dark:border-white/[0.08] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <span>&copy; 2026 AG Solutions - All rights reserved</span>
            <span>{contactInfo.location}</span>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
}
