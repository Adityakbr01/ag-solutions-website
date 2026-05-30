import { services } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
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
    const imageName = src.split("/").pop()?.replace(/\.(png|webp)$/, "");
    return `/images/hero-optimized/${imageName}-192.webp 192w, /images/hero-optimized/${imageName}-384.webp 384w`;
  }
  return undefined;
};

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
          <div className="grid items-stretch overflow-hidden rounded-lg border border-border bg-border [grid-auto-rows:minmax(0,1fr)] md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                className={`service-card group relative flex h-full min-h-[390px] min-w-0 flex-col overflow-hidden bg-card p-8 transition duration-300 hover:bg-muted hover:shadow-xl hover:shadow-foreground/5 dark:bg-[#0a0a0a] dark:hover:bg-[#131312] ${
                  service.highlighted
                    ? "bg-accent/10 dark:bg-accent/[0.03]"
                    : ""
                }`}
                key={service.title}
              >
                <div className="relative z-10 mb-7 flex h-28 w-full items-center justify-start">
                  <img
                    src={service.image.src}
                    srcSet={getServiceImageSrcSet(service.image.src)}
                    sizes="(max-width: 639px) 96px, 192px"
                    alt={service.image.alt}
                    width="96"
                    height="96"
                    loading="lazy"
                    decoding="async"
                    className="h-24 w-24 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="relative z-10 min-h-14 font-display text-xl font-bold leading-7 text-card-foreground">
                  {service.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm font-light leading-7 text-muted-foreground">
                  {service.description}
                </p>
                <div className="relative z-10 mt-auto pt-8">
                  <HomeButtonLink
                    href={service.href}
                    className="home-wave-cta px-6"
                    variant="ghost"
                  >
                    {service.highlighted ? "Contact us" : "Learn more"}
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
