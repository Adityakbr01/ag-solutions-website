import { portfolioItems } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import { HomeIcon } from "./HomeIcon";
import { SectionHeader } from "./SectionHeader";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="px-5 py-24 md:px-12">
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
                className="overflow-hidden rounded-lg border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-accent/40 dark:border-white/[0.08] dark:bg-[#131312] dark:hover:border-accent/20"
                key={item.title}
              >
                <div className="flex aspect-[16/10] items-center justify-center bg-accent/10 text-accent-strong dark:bg-[#1a1a18] dark:text-accent">
                  <HomeIcon name={item.icon} className="h-12 w-12" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-bold text-card-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex rounded-full border border-info/20 bg-info/10 px-3 py-1 text-xs text-info">
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
