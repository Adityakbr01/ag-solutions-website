import { File01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { productFeatures, products } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import { HomeIcon } from "./HomeIcon";
import { SectionHeader } from "./SectionHeader";

export function ProductsSection() {
  return (
    <section id="products" className="bg-muted/50 px-5 py-24 dark:bg-[#0d0d0c] md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            eyebrow="Our Products"
            title={"Built In-House,\nFor Real Business Needs."}
          />
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn className="lg:col-span-2">
            <article className="grid gap-10 rounded-lg border border-accent/25 bg-card p-8 shadow-sm dark:border-accent/15 dark:bg-[#131312] md:grid-cols-[1.1fr_0.9fr] md:p-10">
              <div>
                <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-accent-strong dark:text-accent">
                  Flagship Product
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-card-foreground">
                  Export Documentation & Management System
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-muted-foreground md:text-base">
                  EDMS helps export businesses manage all documentation,
                  reporting, monthly returns, and scheme claims in one organized
                  platform, saving time and money across the export lifecycle.
                </p>
                <div className="mt-7 space-y-3">
                  {productFeatures.map((feature) => (
                    <div
                      className="flex items-center gap-3 text-sm text-foreground/80"
                      key={feature}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <HomeIcon name="check" className="h-3.5 w-3.5" />
                      </span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5">
                <div className="rounded-lg border border-border bg-muted p-8 text-center dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent-strong dark:text-accent">
                    <HugeiconsIcon icon={File01Icon} size={32} />
                  </div>
                  <p className="font-display text-4xl font-extrabold text-accent-strong dark:text-accent">
                    EDMS
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
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
              <article className="h-full rounded-lg border border-border bg-card p-8 shadow-sm transition hover:-translate-y-1 hover:border-accent/40 dark:border-white/[0.08] dark:bg-[#131312] dark:hover:border-accent/25">
                <span className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-accent-strong dark:text-accent">
                  {product.badge}
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-card-foreground">
                  {product.title}
                </h3>
                <p className="mt-4 text-sm font-light leading-7 text-muted-foreground">
                  {product.description}
                </p>
                <HomeButtonLink
                  href="#contact"
                  variant="ghost"
                  className="mt-7"
                >
                  Learn More
                </HomeButtonLink>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
