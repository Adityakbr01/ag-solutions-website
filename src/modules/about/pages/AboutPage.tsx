import React from "react";
import { Main, Container, Section, Heading, Text, Article } from "@/components/ui/Semantic";
import { AboutSEO } from "../seo/AboutSEO";

/**
 * AboutPage View - About module core entry.
 */
export const AboutPage: React.FC = () => {
  return (
    <>
      {/* SEO configuration & JSON-LD Structured Data */}
      <AboutSEO />

      <Main>
        <Container className="py-12 md:py-16 space-y-12">
          {/* Header section with H1 */}
          <Section ariaLabel="About Page Header" className="text-center max-w-4xl mx-auto space-y-4">
            <Heading level={1} className="text-4xl md:text-5xl font-black text-neutral-900 dark:text-white">
              Engineering Excellence
            </Heading>
            <Text variant="lead" className="max-w-2xl mx-auto">
              Our mission is to establish scalable, WCAG-accessible, and SEO-optimized frontend benchmarks for modern web applications.
            </Text>
          </Section>

          {/* Grid detailing engineering pillars */}
          <Section ariaLabel="Our Core Pillars" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start border-t border-neutral-200/60 dark:border-neutral-850/80 pt-12">
            <Article className="space-y-6">
              <Heading level={2} className="text-2xl font-bold text-neutral-900 dark:text-white">
                Our Architectural Approach
              </Heading>
              
              <Text variant="body">
                We believe frontend engineering is more than just writing interfaces. It is about crafting experiences that perform under any network constraints, are indexable by search crawlers, and remain usable by individuals using assistive technology.
              </Text>

              <Text variant="body">
                By enforcing a modular architecture, we guarantee that business features stay decoupled from layout shells, making codebases easier to maintain and test at scale.
              </Text>
            </Article>

            <div className="space-y-8">
              <div className="space-y-2">
                <Heading level={3} className="text-lg font-semibold text-neutral-900 dark:text-white">
                  1. Accessibility First
                </Heading>
                <Text variant="body" className="text-neutral-500 text-sm">
                  We enforce WCAG 2.1 AA benchmarks. Interactive controls use native semantic attributes or correct ARIA hooks, supporting screen readers and visual keyboards natively.
                </Text>
              </div>

              <div className="space-y-2">
                <Heading level={3} className="text-lg font-semibold text-neutral-900 dark:text-white">
                  2. Core Web Vitals Optimization
                </Heading>
                <Text variant="body" className="text-neutral-500 text-sm">
                  Aggressive manual chunk code-splitting, preloading of critical assets, strict image sizing constraints, and debounced transition hooks are implemented to optimize LCP, CLS, and INP.
                </Text>
              </div>

              <div className="space-y-2">
                <Heading level={3} className="text-lg font-semibold text-neutral-900 dark:text-white">
                  3. Scalable Feature Modules
                </Heading>
                <Text variant="body" className="text-neutral-500 text-sm">
                  Each feature module operates as an independent structure containing its own routes, pages, assets, and APIs, promoting ease of development and domain boundary enforcement.
                </Text>
              </div>
            </div>
          </Section>
        </Container>
      </Main>
    </>
  );
};

export default AboutPage;
