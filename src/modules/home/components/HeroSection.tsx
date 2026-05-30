import { useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import ScrollIndicatorArrow from "./ScrollIndicatorArrow";
import "swiper/css";

const heroBanners = [
  {
    eyebrow: "Web Platforms",
    title: "Launch faster with scalable web systems.",
    description:
      "High-performance websites, dashboards, and SaaS platforms built for real business workflows.",
    image: "/images/apiImage.webp",
    imageAlt: "Web platform development illustration",
    metric: "10+ yrs",
    metricLabel: "Delivery experience",
    accent: "from-accent/20 via-gold-light/10 to-info/10",
  },
  {
    eyebrow: "Mobile Apps",
    title: "Native-feeling apps for growing teams.",
    description:
      "iOS, Android, and cross-platform products designed around speed, usability, and long-term support.",
    image: "/images/mobileDevelopemnt.webp",
    imageAlt: "Mobile app development illustration",
    metric: "200+",
    metricLabel: "Satisfied clients",
    accent: "from-info/15 via-accent/10 to-success/15",
  },
  {
    eyebrow: "Custom Solutions",
    title: "Software shaped around your operations.",
    description:
      "From automation to integrations, we design custom systems that remove friction from everyday work.",
    image: "/images/customeSolution.webp",
    imageAlt: "Custom software solution illustration",
    metric: "95%",
    metricLabel: "Client retention",
    accent: "from-success/15 via-gold-light/10 to-accent/20",
  },
  {
    eyebrow: "Digital Marketing",
    title: "Campaigns that keep your pipeline moving.",
    description:
      "Search, social, and performance marketing built around clear reporting and stronger conversion paths.",
    image: "/images/online-marketing-promotion-3d-cartoon.webp",
    imageAlt: "Digital marketing promotion illustration",
    metric: "50+",
    metricLabel: "Expert professionals",
    accent: "from-gold-light/20 via-accent/10 to-info/10",
  },
  {
    eyebrow: "Desktop Apps",
    title: "Reliable tools for everyday business work.",
    description:
      "Modern desktop applications, migrations, and internal tools with practical interfaces teams can use daily.",
    image: "/images/sale.webp",
    imageAlt: "Desktop application solution illustration",
    metric: "24/7",
    metricLabel: "Support mindset",
    accent: "from-info/10 via-success/10 to-accent/20",
  },
] as const;

const heroImageSizes =
  "(max-width: 639px) 8rem, (max-width: 767px) 20rem, (max-width: 1023px) 16rem, 18rem";

const getHeroWebpSrcSet = (image: string) => {
  const imageName = image.split("/").pop()?.replace(/\.(png|webp)$/, "");

  return `/images/hero-optimized/${imageName}-192.webp 192w, /images/hero-optimized/${imageName}-384.webp 384w`;
};

export const HeroSection = () => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [heroSwiper, setHeroSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden pb-5 pt-3 sm:min-h-[86vh] sm:justify-center sm:pb-6 sm:pt-0">
      <FadeIn eager className="mx-auto flex w-full flex-col items-center gap-2">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="relative w-full">
            <Swiper
              modules={[A11y, Autoplay, Keyboard]}
              aria-label="AG Solutions hero banners"
              a11y={{
                nextSlideMessage: "Show next hero banner",
                prevSlideMessage: "Show previous hero banner",
              }}
              centeredSlides
              grabCursor
              keyboard={{ enabled: true }}
              loop
              loopAddBlankSlides={false}
              slidesPerGroup={1}
              watchOverflow={false}
              onSlideChange={(swiper) => setActiveHeroIndex(swiper.realIndex)}
              onSwiper={setHeroSwiper}
              autoplay={{
                delay: 4200,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              slideToClickedSlide
              slidesPerView={1}
              spaceBetween={8}
              speed={650}
              breakpoints={{
                640: {
                  slidesPerView: 1.02,
                },
                1024: {
                  slidesPerView: 1.07,
                },
                1440: {
                  slidesPerView: 1.13,
                },
              }}
              className="hero-banner-swiper"
            >
              {heroBanners.map((banner, index) => (
                <SwiperSlide key={`${banner.title}-${index}`}>
                  <article className="hero-banner-card relative grid w-full overflow-hidden rounded-lg border border-border bg-card dark:border-white/[0.08] dark:bg-[#0c0c0b] md:grid-cols-[1.05fr_0.95fr]">
                    <div
                      className={`absolute inset-0 bg-linear-to-br ${banner.accent}`}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,color-mix(in_srgb,var(--accent)_18%,transparent),transparent_32%),linear-gradient(90deg,color-mix(in_srgb,var(--background)_78%,transparent),transparent_72%)]"
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex min-w-0 flex-col items-start justify-center px-4 py-5 text-left sm:px-8 sm:py-7 md:px-10 lg:px-12">
                      <span className="inline-flex rounded-full border border-accent/30 bg-background/65 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-accent-strong backdrop-blur dark:bg-white/[0.04] dark:text-accent">
                        {banner.eyebrow}
                      </span>
                      <strong className="mt-3 max-w-2xl font-display text-2xl font-extrabold leading-[1.08] text-foreground sm:mt-4 sm:text-4xl sm:leading-[1.05] lg:text-5xl">
                        {banner.title}
                      </strong>
                      <span className="mt-3 max-w-[17rem] text-xs leading-5 text-muted-foreground sm:mt-4 sm:max-w-xl sm:text-base sm:leading-6">
                        {banner.description}
                      </span>
                      <div className="mt-5 flex items-center gap-3 rounded-lg border border-border bg-background/75 px-3.5 py-2.5 shadow-sm backdrop-blur sm:mt-6 sm:px-4 sm:py-3 dark:border-white/[0.08] dark:bg-black/25">
                        <span className="font-display text-2xl font-extrabold text-accent-strong sm:text-3xl dark:text-accent">
                          {banner.metric}
                        </span>
                        <span className="max-w-28 text-left font-mono text-[10px] font-bold uppercase leading-4 tracking-wider text-muted-foreground">
                          {banner.metricLabel}
                        </span>
                      </div>
                    </div>
                    <div className="pointer-events-none absolute bottom-12 right-1 z-10 flex h-28 w-36 items-end justify-end opacity-45 sm:bottom-2 sm:right-2 sm:h-44 sm:w-56 sm:opacity-90 md:relative md:bottom-auto md:right-auto md:h-auto md:w-auto md:min-h-56 md:items-center md:justify-center md:p-8 md:opacity-100 lg:p-10">
                      <picture className="contents">
                        <source
                          srcSet={getHeroWebpSrcSet(banner.image)}
                          sizes={heroImageSizes}
                          type="image/webp"
                        />
                        <img
                          src={banner.image}
                          alt={banner.imageAlt}
                          width="360"
                          height="360"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          fetchPriority={index === 0 ? "high" : "auto"}
                          sizes={heroImageSizes}
                          className="h-28 w-full max-w-[8rem] object-contain drop-shadow-2xl sm:h-40 sm:max-w-xs md:h-64 lg:h-72"
                        />
                      </picture>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              className="hero-banner-dots"
              aria-label="Hero banner pagination"
            >
              {heroBanners.map((banner, index) => (
                <button
                  aria-current={activeHeroIndex === index ? "true" : undefined}
                  aria-label={`Show ${banner.eyebrow} banner`}
                  className={`hero-banner-dot ${
                    activeHeroIndex === index ? "is-active" : ""
                  }`}
                  key={banner.title}
                  onClick={() => heroSwiper?.slideToLoop(index)}
                  type="button"
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 px-4 font-mono text-[10px] tracking-wider text-muted-foreground/60 sm:mt-5 sm:gap-x-6 sm:px-6 md:px-12">
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-accent-strong dark:text-accent">
                //
              </span>
              WEB PLATFORMS
            </span>
            <span className="hidden text-foreground/20 sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-accent-strong dark:text-accent">
                //
              </span>
              MOBILE APPS
            </span>
            <span className="hidden text-foreground/20 sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <span className="font-bold text-accent-strong dark:text-accent">
                //
              </span>
              CLOUD SYSTEMS
            </span>
          </div>

          <div className="mt-5 flex w-full flex-col items-center justify-center gap-3 px-4 sm:mt-7 sm:flex-row sm:gap-4 sm:px-6 md:px-12">
            <HomeButtonLink
              href="#services"
              className="home-primary-cta apple-border-shine px-8"
            >
              Explore Services
            </HomeButtonLink>
            <HomeButtonLink
              href="#portfolio"
              className="home-wave-cta px-8"
              variant="ghost"
              showArrow={false}
            >
              View Our Work
            </HomeButtonLink>
          </div>
        </div>
      </FadeIn>
      <div className="absolute bottom-8 right-10 z-20 hidden -translate-x-1/2 sm:block">
        <ScrollIndicatorArrow />
      </div>
    </section>
  );
};

export default HeroSection;
