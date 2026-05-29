import { Suspense, lazy } from "react";
import { Main } from "@/components/ui/Semantic";
import { HeroSection } from "../components/HeroSection";
import { StatsStrip } from "../components/StatsStrip";
import { HomeSEO } from "../seo/HomeSEO";

const AboutSection = lazy(() =>
  import("../components/AboutSection").then((module) => ({
    default: module.AboutSection,
  }))
);
const ContactSection = lazy(() =>
  import("../components/ContactSection").then((module) => ({
    default: module.ContactSection,
  }))
);
const PortfolioSection = lazy(() =>
  import("../components/PortfolioSection").then((module) => ({
    default: module.PortfolioSection,
  }))
);
const ProductsSection = lazy(() =>
  import("../components/ProductsSection").then((module) => ({
    default: module.ProductsSection,
  }))
);
const ServicesSection = lazy(() =>
  import("../components/ServicesSection").then((module) => ({
    default: module.ServicesSection,
  }))
);

/**
 * HomePage View - AG Solutions marketing homepage.
 * Composes the module-level sections so each area can be edited independently.
 */
export const HomePage = () => {
  return (
    <>
      <HomeSEO />
      <div className="bg-background text-foreground transition-colors duration-300">
        <Main className="bg-background text-foreground">
          <HeroSection />
          <StatsStrip />
          <Suspense fallback={null}>
            <ServicesSection />
            <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent" />
            <AboutSection />
            <ProductsSection />
            <PortfolioSection />
            <ContactSection />
          </Suspense>
        </Main>
      </div>
    </>
  );
};

export default HomePage;
