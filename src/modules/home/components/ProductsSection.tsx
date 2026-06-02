import type { CSSProperties } from "react";
import { File01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { productFeatures, products } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import { HomeIcon } from "./HomeIcon";
import { SectionHeader } from "./SectionHeader";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-5 py-24 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Products"
            title={"Built In-House,\nFor Real Business Needs."}
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="lg:col-span-2">
            <article
              className="section-accent-card relative grid overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-white/[0.08] dark:bg-slate-900/80 md:grid-cols-[1.1fr_0.9fr] md:p-10"
              style={{ "--card-accent": "#38bdf8" } as CSSProperties}
            >
              <div className="relative z-10">
                <span className="section-accent-badge inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                  Flagship Product
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">
                  Export Documentation & Management System
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-slate-600 dark:text-slate-300 md:text-base">
                  EDMS helps export businesses manage all documentation,
                  reporting, monthly returns, <br/> and scheme claims in one organized
                  platform, saving time and money across the export <br/> lifecycle.
                </p>
                <div className="mt-7 space-y-3">
                  {productFeatures.map((feature) => (
                    <div
                      className="flex items-center gap-3 text-sm text-slate-800 dark:text-slate-100"
                      key={feature}
                    >
                      <span className="section-accent-check flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                        <HomeIcon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-col justify-center gap-5">
                <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-8 text-center dark:border-white/[0.08] dark:bg-white/[0.05]">
                  <div className="section-accent-icon mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-800">
                    <HugeiconsIcon icon={File01Icon} size={32} />
                  </div>
                  <p className="section-accent-text font-display text-4xl font-extrabold">
                    EDMS
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Export Documentation Suite
                  </p>
                </div>
                <HomeButtonLink href="#contact" className="w-full">
                  Request a Demo
                </HomeButtonLink>
              </div>
            </article>
          </FadeIn>

          {products.map((product, index) => (
            <FadeIn delay={120 + index * 120} key={product.title}>
              <article
                className="section-accent-card relative h-full overflow-hidden rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-white/[0.08] dark:bg-slate-900/80"
                style={{ "--card-accent": product.accent } as CSSProperties}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <span className="section-accent-badge inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]">
                      {product.badge}
                    </span>
                    <span className="section-accent-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 dark:border-white/[0.08] dark:bg-slate-800">
                      <HomeIcon name={product.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-slate-950 dark:text-white">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm font-light leading-7 text-slate-600 dark:text-slate-300">
                    {product.description}
                  </p>
                  <HomeButtonLink
                    href="#contact"
                    variant="ghost"
                    className="home-wave-cta mt-7"
                  >
                    Learn More
                  </HomeButtonLink>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
