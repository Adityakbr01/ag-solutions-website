import { useState } from "react";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { heroTechRows } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeButtonLink } from "./HomeButtonLink";

const heroLeftVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const heroLeftItemVariants: Variants = {
  hidden: {
    opacity: 0.92,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const createRandomBarHeights = () =>
  Array.from(
    { length: 5 },
    () => `${Math.floor(Math.random() * 66) + 30}%`
  );

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [barHeights] = useState(createRandomBarHeights);

  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto grid min-w-0 max-w-7xl items-center gap-14 lg:grid-cols-2">
        <FadeIn eager className="min-w-0 max-w-2xl">
          <motion.div
            animate="visible"
            initial={shouldReduceMotion ? false : "hidden"}
            variants={heroLeftVariants}
          >
            <motion.div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent-strong dark:text-accent"
              variants={heroLeftItemVariants}
            >
              <span className="home-pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
              10 Years of Digital Excellence
            </motion.div>

            <motion.h1
              className="font-display text-4xl font-extrabold leading-none text-foreground sm:text-6xl lg:text-7xl"
              variants={heroLeftItemVariants}
            >
              <span className="block sm:inline">We Build</span>
              <span className="block text-accent-strong dark:text-accent sm:ml-3 sm:inline">
                Digital
              </span>
              <span className="block">Products That</span>
              <span className="block">Scale.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-base font-light leading-8 text-muted-foreground sm:text-lg"
              variants={heroLeftItemVariants}
            >
              From web apps to mobile solutions, AG Solutions crafts technology
              that drives business growth for startups and enterprises alike.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              variants={heroLeftItemVariants}
            >
              <HomeButtonLink href="#services" className="home-primary-cta">
                Explore Services
              </HomeButtonLink>
              <HomeButtonLink
                href="#portfolio"
                className="home-wave-cta"
                variant="ghost"
                showArrow={false}
              >
                View Our Work
              </HomeButtonLink>
            </motion.div>
          </motion.div>
        </FadeIn>

        <div className="hidden justify-end lg:flex">
          <div className="relative aspect-square w-full max-w-[480px]">
            <FadeIn
              delay={160}
              className="absolute left-[5%] top-[5%] w-[52%] rounded-lg border border-border bg-card p-5 shadow-xl dark:border-white/[0.08] dark:bg-[#131312]"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                Projects Delivered
              </p>
              <p className="font-display text-3xl font-bold text-success">
                200+
              </p>
              <div className="mt-4 flex h-9 gap-1">
                {barHeights.map((height, index) => (
                  <span
                    className="relative flex-1 overflow-hidden rounded bg-muted dark:bg-white/[0.06]"
                    key={index}
                  >
                    <span
                      className="home-bar-fill absolute inset-x-0 bottom-0 rounded bg-accent"
                      style={
                        {
                          "--bar-height": height,
                          animationDelay: `${100 + index * 100}ms`,
                        } as CSSProperties
                      }
                    />
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn
              delay={280}
              className="absolute right-0 top-[32%] w-[52%] rounded-lg border border-border bg-card p-5 shadow-xl dark:border-white/[0.08] dark:bg-[#131312]"
            >
              <p className="mb-3 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                Tech Stack
              </p>
              <div className="space-y-2.5">
                {heroTechRows.map((row) => (
                  <div
                    className="flex items-center justify-between gap-3 text-xs text-foreground"
                    key={row.name}
                  >
                    <span className="inline-flex items-center gap-2">
                      <span
                        className={`h-2 w-2 rounded-full ${
                          row.tone === "cyan"
                            ? "bg-info"
                            : row.tone === "lime"
                              ? "bg-accent"
                              : "bg-success"
                        }`}
                      />
                      {row.name}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {row.scope}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn
              delay={400}
              className="absolute bottom-[20%] left-[10%] w-[48%] rounded-lg border border-border bg-card p-5 shadow-xl dark:border-white/[0.08] dark:bg-[#131312]"
            >
              <p className="mb-2 text-xs uppercase tracking-[0.08em] text-muted-foreground">
                Client Retention
              </p>
              <p className="font-display text-3xl font-bold text-info">95%</p>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
