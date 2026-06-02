import type { CSSProperties } from "react";
import { portfolioItems } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import { HomeIcon } from "./HomeIcon";
import { SectionHeader } from "./SectionHeader";

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="bg-white px-5 py-24 dark:bg-slate-950 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            align="split"
            eyebrow="Our Work"
            title={"Recent\nProjects"}
            description="A selection of websites, apps, and platforms we have built for clients across industries. Each project is a unique challenge we are proud to have solved."
          />
        </FadeIn>

        <FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {portfolioItems.map((item) => (
              <article
                className="section-accent-card relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 dark:border-white/[0.08] dark:bg-slate-900/80"
                key={item.title}
                style={{ "--card-accent": item.accent } as CSSProperties}
              >
                <div className="relative z-10 flex aspect-[16/10] items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-800/70">
                  <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,color-mix(in_srgb,var(--card-accent)_28%,transparent),transparent_42%)]"
                    aria-hidden="true"
                  />
                  <span className="section-accent-icon relative flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/[0.08] dark:bg-slate-900">
                    <HomeIcon name={item.icon} className="h-9 w-9" />
                  </span>
                </div>
                <div className="relative z-10 p-6">
                  <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                  <span className="section-accent-badge mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium">
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>

        <div className="mt-10 text-center">
          <HomeButtonLink
            className="home-wave-cta"
            href="#contact"
            variant="ghost"
          >
            View All Projects
          </HomeButtonLink>
        </div>
      </div>
    </section>
  );
}
