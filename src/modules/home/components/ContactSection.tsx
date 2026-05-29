import { useState } from "react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "../data/homeContent";
import { FadeIn } from "./FadeIn";
import { HomeIcon } from "./HomeIcon";

export function ContactSection() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <FadeIn>
      <section id="contact" className="px-5 md:px-12 mb-6">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-border bg-card p-8 shadow-sm dark:border-white/[0.08] dark:bg-[#131312] md:grid-cols-2 md:p-14">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-[1.1] text-card-foreground">
              Ready to build
              <span className="block">
                something{" "}
                <span className="text-accent-strong dark:text-accent">
                  great?
                </span>
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-sm font-light leading-7 text-muted-foreground">
              Tell us about your project and we will get back to you within one
              business day with a free consultation.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={contactInfo.phoneHref}
                className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-accent-strong dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-accent">
                  <HomeIcon name="phone" className="h-4 w-4" />
                </span>
                {contactInfo.phoneDisplay} - {contactInfo.hours}
              </a>
              <a
                href={contactInfo.emailHref}
                className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-accent-strong dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-accent">
                  <HomeIcon name="mail" className="h-4 w-4" />
                </span>
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted text-accent-strong dark:border-white/[0.08] dark:bg-white/[0.05] dark:text-accent">
                  <HomeIcon name="mapPin" className="h-4 w-4" />
                </span>
                {contactInfo.location}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-bold text-card-foreground">
              Stay in the loop
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
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
                className="min-h-12 flex-1 rounded-full border border-border bg-background px-5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-accent/60 dark:border-white/[0.08] dark:bg-white/[0.05]"
              />
              <Button
                type="submit"
                className="min-h-12  cursor-pointer flex items-center justify-center gap-2 rounded-full border-0 bg-accent px-7 text-sm font-semibold text-accent-foreground hover:bg-accent/85"
              >
                <span>Subscribe</span>
                <HomeIcon name="arrowRight" className="h-4 w-4" />
              </Button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              {isSubscribed
                ? "Thanks. You are on the list."
                : "No spam, unsubscribe any time."}
            </p>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
