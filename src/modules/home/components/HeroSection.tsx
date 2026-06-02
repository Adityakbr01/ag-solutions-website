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
    label: "Digital Marketing",
    image: "/images/digitalMArketingBanner.png",
    imageAlt:
      "Digital marketing banner showing campaigns, analytics, search, and social growth",
  },
  {
    label: "Web Platforms",
    image: "/images/WebPlatformsBannerImage.png",
    imageAlt:
      "Web platforms banner showing scalable web systems and cloud dashboards",
  },
  {
    label: "Mobile Apps",
    image: "/images/mobileDevelopemntBanner.png",
    imageAlt:
      "Mobile apps banner showing native-feeling mobile products for growing teams",
  },

  {
    label: "Desktop Development",
    image: "/images/desktopDevelopmentBanner.png",
    imageAlt:
      "Desktop development banner showing cross-platform applications and productivity tools",
  },
] as const;

const heroCarouselSlides = Array.from({ length: 3 }, () => heroBanners).flat();
const middleSlideOffset = heroBanners.length;

const getOriginalBannerIndex = (index: number) =>
  ((index % heroBanners.length) + heroBanners.length) % heroBanners.length;

export const HeroSection = () => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [heroSwiper, setHeroSwiper] = useState<SwiperInstance | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-start overflow-hidden pb-5 pt-8 sm:min-h-[86vh] w-full sm:justify-center sm:pb-6 sm:pt-2">
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
              initialSlide={middleSlideOffset}
              keyboard={{ enabled: true }}
              slidesPerGroup={1}
              watchOverflow={false}
              onSlideChange={(swiper) =>
                setActiveHeroIndex(getOriginalBannerIndex(swiper.activeIndex))
              }
              onSlideChangeTransitionEnd={(swiper) => {
                if (
                  swiper.activeIndex < middleSlideOffset ||
                  swiper.activeIndex >= middleSlideOffset * 2
                ) {
                  swiper.slideTo(
                    middleSlideOffset +
                      getOriginalBannerIndex(swiper.activeIndex),
                    0,
                    false,
                  );
                }
              }}
              onSwiper={(swiper) => {
                setHeroSwiper(swiper);
                setActiveHeroIndex(getOriginalBannerIndex(swiper.activeIndex));
              }}
              autoplay={{
                delay: 3600,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              lazyPreloadPrevNext={2}
              slideToClickedSlide
              slidesPerView={1}
              spaceBetween={12}
              speed={650}
              breakpoints={{
                640: {
                  slidesPerView: 1.08,
                  spaceBetween: 14,
                },
                1024: {
                  slidesPerView: 1.16,
                  spaceBetween: 16,
                },
                1440: {
                  slidesPerView: 1.24,
                  spaceBetween: 18,
                },
              }}
              className="hero-banner-swiper"
            >
              {heroCarouselSlides.map((banner, index) => (
                <SwiperSlide key={`${banner.label}-${index}`}>
                  <article className="hero-banner-card relative w-full overflow-hidden rounded-lg border border-border bg-card shadow-[0_20px_60px_rgba(15,23,42,0.12)] dark:border-white/[0.08] dark:bg-[#0c0c0b]">
                    <img
                      src={banner.image}
                      alt={banner.imageAlt}
                      width="1536"
                      height="864"
                      loading={index < heroBanners.length ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "auto"}
                      sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1439px) 76vw, 62vw"
                      className="h-full w-full object-cover"
                    />
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
                  aria-label={`Show ${banner.label} banner`}
                  className={`hero-banner-dot ${
                    activeHeroIndex === index ? "is-active" : ""
                  }`}
                  key={banner.label}
                  onClick={() => heroSwiper?.slideTo(middleSlideOffset + index)}
                  type="button"
                />
              ))}
            </div>
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
