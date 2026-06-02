import type { CSSProperties } from "react";
import { stats } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeIcon } from "./HomeIcon";

export function StatsStrip() {
  return (
    <FadeIn>
      <div className="border-y border-slate-200 bg-white/70 px-5 py-6 dark:border-white/[0.08] dark:bg-slate-950 md:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              className="section-accent-card relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-white/[0.08] dark:bg-slate-900/70"
              key={stat.label}
              style={{ "--card-accent": stat.accent } as CSSProperties}
            >
              <div className="relative z-10 flex items-center gap-4">
                <span className="section-accent-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-800">
                  <HomeIcon name={stat.icon} className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-3xl font-extrabold leading-none text-slate-950 md:text-4xl dark:text-white">
                    {stat.value}
                    <span className="section-accent-text">{stat.suffix}</span>
                  </p>
                  <p className="mt-2 text-sm leading-5 text-slate-600 dark:text-slate-300">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
