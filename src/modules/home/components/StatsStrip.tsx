import { stats } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeIcon } from "./HomeIcon";

export function StatsStrip() {
  return (
    <FadeIn>
      <section
        aria-label="AG Solutions company stats"
        className="bg-background px-5 pb-14 pt-2 md:px-12"
      >
        <div className="mx-auto max-w-7xl rounded-lg border border-slate-200/80 bg-white px-5 py-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] dark:border-white/[0.08] dark:bg-slate-900 md:px-8 md:py-8">
          <div className="mb-7 grid gap-3 md:grid-cols-[0.95fr_1.05fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-accent-strong dark:text-accent">
                Agency in numbers
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-slate-950 sm:text-3xl dark:text-white">
                Trusted digital partner for growing businesses
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 md:justify-self-end dark:text-slate-300">
              A decade of delivery across web, mobile, desktop, custom
              software, and digital marketing.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                className="group rounded-lg border border-slate-200 bg-slate-50/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] dark:border-white/[0.08] dark:bg-white/[0.04] dark:hover:bg-white/[0.06]"
                key={stat.label}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ring-1 ring-slate-200/70 dark:ring-white/[0.08]"
                  style={{ backgroundColor: `${stat.accent}14`, color: stat.accent }}
                >
                  <HomeIcon name={stat.icon} className="h-5 w-5" />
                </span>
                <div className="mt-5 min-w-0">
                  <p className="font-display text-4xl font-extrabold leading-none tracking-normal text-slate-950 dark:text-white">
                    {stat.value}
                    <span style={{ color: stat.accent }}>{stat.suffix}</span>
                  </p>
                  <p className="mt-3 text-sm font-medium leading-5 text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
