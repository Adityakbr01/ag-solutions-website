import { aboutFeatures, techStack } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <SectionHeader
            eyebrow="About AG Solutions"
            title={"Believers,\nThinkers &\nCreators."}
            description="Based in Bengaluru, we are a team of customer-centric innovators striving hard towards perfection, providing tech and digital solutions under one roof since 2015."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map((feature) => (
              <article
                className="rounded-lg border border-border bg-card p-5 shadow-sm dark:border-white/[0.08] dark:bg-[#131312]"
                key={feature.title}
              >
                <h3 className="font-display text-base font-bold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={180}
          className="rounded-lg border border-border bg-card p-8 shadow-sm dark:border-white/[0.08] dark:bg-[#131312]"
        >
          <p className="font-display text-7xl font-extrabold leading-none text-accent-strong dark:text-accent">
            10
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Years of delivering excellence
          </p>
          <p className="mt-8 text-sm font-light leading-7 text-muted-foreground">
            From our headquarters in Jayanagara, Bengaluru, we have partnered
            with businesses across India and internationally to bring their
            digital visions to life.
          </p>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            Technologies We Use
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {techStack.map((tech) => (
              <span
                className="rounded-full border border-border bg-muted px-3.5 py-1.5 text-xs text-muted-foreground dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-[#b5b5ad]"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
