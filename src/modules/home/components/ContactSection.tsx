import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeIcon } from "./HomeIcon";
import type { HomeIconName } from "./HomeIcon";

const contactMethods: Array<{
  accent: string;
  href?: string;
  icon: HomeIconName;
  label: string;
}> = [
  {
    accent: "#22c55e",
    href: contactInfo.phoneHref,
    icon: "phone",
    label: `${contactInfo.phoneDisplay} - ${contactInfo.hours}`,
  },
  {
    accent: "#38bdf8",
    href: contactInfo.emailHref,
    icon: "mail",
    label: contactInfo.email,
  },
  {
    accent: "#f97316",
    icon: "mapPin",
    label: contactInfo.location,
  },
];

export function ContactSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <FadeIn>
      <section id="contact" className="mb-6 px-5 md:px-12">
        <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-lg border border-slate-200 bg-white p-8 shadow-none! dark:border-white/[0.08] dark:bg-slate-900/80 md:grid-cols-2 md:p-14">
          <div className="absolute inset-" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="font-display text-4xl font-extrabold leading-[1.1] text-slate-950 dark:text-white">
              Ready to build
              <span className="block">
                something{" "}
                <span className="text-accent-strong dark:text-accent">
                  great?
                </span>
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-slate-600 dark:text-slate-300">
              Tell us about your project and we will get back to you within one
              business day with a free consultation.
            </p>

            <div className="mt-8 space-y-4">
              {contactMethods.map((method) => {
                const content = (
                  <>
                    <span className="section-accent-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white dark:border-white/[0.08] dark:bg-slate-800">
                      <HomeIcon name={method.icon} className="h-4 w-4" />
                    </span>
                    <span>{method.label}</span>
                  </>
                );

                const className =
                  "section-accent-card relative flex items-center gap-3 overflow-hidden rounded-lg border border-slate-200 bg-slate-50/80 p-3 text-sm text-slate-700 transition hover:-translate-y-0.5 dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-slate-200";

                return method.href ? (
                  <a
                    className={className}
                    href={method.href}
                    key={method.label}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={className} key={method.label}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="section-accent-card relative z-10 overflow-hidden rounded-lg border border-slate-200 bg-slate-50/85 p-6 dark:border-white/[0.08] dark:bg-white/[0.05]">
            <h3 className="font-display text-xl font-bold text-slate-950 dark:text-white">
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Get our newsletter with tech insights and project spotlights.
            </p>
            <form
              className="mt-7 flex flex-col gap-3 sm:flex-row"
              onSubmit={(event) => {
                event.preventDefault();
                setIsSubscribed(true);
              }}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                className="min-h-12 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-accent/60 dark:border-white/[0.08] dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
              />
              <Button
                type="submit"
                className="flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-accent px-7 text-sm font-semibold text-accent-foreground hover:bg-accent/85"
              >
                <span>Subscribe</span>
                <HomeIcon name="arrowRight" className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
              {isSubscribed
                ? "Thanks. You are on the list."
                : "No spam, unsubscribe any time."}
            </p>
            <img
              src="/images/noSpam.webp"
              alt=""
              width={700}
              height={600}
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="pointer-events-none absolute! -bottom-12 -right-8 z-0! w-[clamp(11rem,26vw,20rem)] select-none object-contain opacity-65 sm:-bottom-20 sm:right-4"
            />
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
