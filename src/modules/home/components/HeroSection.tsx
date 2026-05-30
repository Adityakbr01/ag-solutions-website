import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";
import ScrollIndicatorArrow from "./ScrollIndicatorArrow";

export const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12">
      <FadeIn
        eager
        className="mx-auto flex w-full max-w-5xl flex-col items-center gap-2"
      >
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="relative mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3.5 py-1 text-xs font-medium tracking-wide text-foreground/80 dark:border-white/10 dark:bg-white/[0.03]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent-strong dark:text-accent">
              NEW RELEASE
            </span>
            <span className="h-3 w-px bg-border dark:bg-white/10" />
            <span className="text-[11px] font-normal text-muted-foreground">
              AG Solutions v3.0.0 is live
            </span>
          </div>

          <h1 className="max-w-4xl text-center font-display text-5xl font-extrabold leading-[0.9] text-foreground sm:text-7xl lg:text-8xl">
            Built to Perform. <br className="hidden sm:inline" />
            <span className="relative inline-block bg-linear-to-b from-accent-strong to-[#282a26] bg-clip-text text-transparent dark:from-accent dark:via-[#c8ff76] dark:to-[#ebd2d2]">
              Designed to Scale.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-center font-display text-base font-normal leading-[1.45] text-muted-foreground/80 sm:text-lg md:text-xl">
            AG Solutions turns complex ideas into powerful digital products -
            from fast-moving startups to enterprise-grade platforms built to
            handle whatever comes next.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] tracking-wider text-muted-foreground/60">
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

          <div className="mt-12 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
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
      <div className="absolute bottom-8 right-10 z-20 -translate-x-1/2">
        <ScrollIndicatorArrow />
      </div>
    </section>
  );
};

export default HeroSection;
