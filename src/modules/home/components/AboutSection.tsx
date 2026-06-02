import type { CSSProperties } from "react";
import { aboutFeatures, techStack } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeIcon } from "./HomeIcon";
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
                className="section-accent-card relative overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/[0.08] dark:bg-slate-900/75"
                key={feature.title}
                style={{ "--card-accent": feature.accent } as CSSProperties}
              >
                <div className="relative z-10 flex items-start gap-4">
                  <span className="section-accent-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 dark:border-white/[0.08] dark:bg-slate-800">
                    <HomeIcon name={feature.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-slate-950 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn
          delay={180}
          className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-sm dark:border-white/[0.08] dark:bg-slate-900/80"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_86%_12%,color-mix(in_srgb,var(--secondary-accent)_18%,transparent),transparent_34%),radial-gradient(circle_at_8%_92%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_30%)]"
            aria-hidden="true"
          />
          <p className="relative z-10 font-display text-7xl font-extrabold leading-none text-accent-strong dark:text-accent">
            10
          </p>
          <p className="relative z-10 mt-2 text-sm text-slate-600 dark:text-slate-300">
            Years of delivering excellence
          </p>
          <p className="relative z-10 mt-8 text-sm font-light leading-7 text-slate-600 dark:text-slate-300">
            From our headquarters in Jayanagara, Bengaluru, we have partnered
            with businesses across India and internationally to bring their
            digital visions to life.
          </p>

          <p className="relative z-10 mt-8 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
            Technologies We Use
          </p>
          <div className="relative z-10 mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {techStack.map((tech) => (
              <div
                className="flex min-h-14 min-w-0 items-center gap-3 rounded-full border border-slate-200 bg-slate-50/80 px-3 py-2.5 dark:border-white/[0.08] dark:bg-white/[0.05]"
                key={tech.name}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-800">
                  <img
                    src={tech.image.src}
                    alt={tech.image.alt}
                    width="28"
                    height="28"
                    loading="lazy"
                    decoding="async"
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <span className="min-w-0 text-sm font-medium leading-5 text-slate-800 dark:text-white">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
