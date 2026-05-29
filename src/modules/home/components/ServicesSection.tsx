import { services } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeIcon } from "./HomeIcon";
import { SectionHeader } from "./SectionHeader";

export function ServicesSection() {
  return (
    <section id="services" className="px-5 py-24 md:px-12">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeader
            align="split"
            eyebrow="What We Do"
            title={"End-to-End\nDigital Services"}
            description="We combine modern technology with mature development methodologies to deliver solutions that are scalable, robust, and future-ready."
          />
        </FadeIn>

        <FadeIn>
          <div className="grid overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                className={`group relative min-h-[280px] bg-card p-8 transition hover:bg-muted dark:bg-[#0a0a0a] dark:hover:bg-[#131312] ${
                  service.highlighted ? "bg-accent/10 dark:bg-accent/[0.03]" : ""
                }`}
                key={service.title}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition group-hover:scale-x-100" />
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg border ${
                    service.highlighted
                      ? "border-accent/30 bg-accent/15 text-accent-strong dark:text-accent"
                      : "border-accent/20 bg-accent/10 text-accent-strong dark:text-accent"
                  }`}
                >
                  <HomeIcon name={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-7 text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition hover:text-foreground dark:text-accent"
                >
                  {service.highlighted ? "Contact us" : "Learn more"}
                  <HomeIcon name="arrowRight" className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
