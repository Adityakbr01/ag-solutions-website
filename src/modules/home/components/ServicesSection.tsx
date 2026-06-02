import type { CSSProperties } from "react";
import { services } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import { HomeIcon } from "./HomeIcon";
import { SectionHeader } from "./SectionHeader";

const getServiceImageSrcSet = (src: string) => {
  const isOptimized = [
    "apiImage.webp",
    "mobileDevelopemnt.webp",
    "sale.webp",
    "customeSolution.webp",
    "online-marketing-promotion-3d-cartoon.webp",
  ].some((name) => src.includes(name));

  if (isOptimized) {
    const imageName = src
      .split("/")
      .pop()
      ?.replace(/\.(png|webp)$/, "");
    return `/images/hero-optimized/${imageName}-192.webp 192w, /images/hero-optimized/${imageName}-384.webp 384w`;
  }
  return undefined;
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-slate-50/80 px-5 py-24 dark:bg-slate-950 md:px-12"
    >
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
          <div className="grid items-stretch gap-5 [grid-auto-rows:minmax(0,1fr)] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                id={service.id}
                className="service-showcase-card shadow-none! group relative flex h-full min-h-[390px] min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-white/[0.08] dark:bg-slate-900/80 sm:p-6"
                key={service.title}
                style={{ "--service-accent": service.accent } as CSSProperties}
              >
                <div className="relative z-10 mb-7 flex min-h-16 items-start justify-between gap-4">
                  <div className="service-showcase-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 dark:border-white/[0.08] dark:bg-slate-800">
                    <HomeIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <img
                    src={service.image.src}
                    srcSet={getServiceImageSrcSet(service.image.src)}
                    sizes="(max-width: 639px) 96px, 128px"
                    alt={service.image.alt}
                    width="128"
                    height="96"
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-24 object-contain object-right drop-shadow-[0_14px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 sm:h-20 sm:w-28"
                  />
                </div>
                <h3 className="relative z-10 font-display text-xl font-bold leading-tight text-slate-950 dark:text-white">
                  {service.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm font-light leading-6 text-slate-600 dark:text-[#b8c9e7]">
                  {service.description}
                </p>

                <ul className="relative z-10 mt-5 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      className="flex min-w-0 items-center gap-3 text-sm leading-5 text-slate-800 dark:text-white"
                      key={feature}
                    >
                      <span className="service-feature-check flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                        <HomeIcon name="check" className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-auto pt-6">
                  <HomeButtonLink
                    href={service.href}
                    className="home-wave-cta w-full px-5"
                    variant="ghost"
                  >
                    {service.ctaLabel}
                  </HomeButtonLink>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
