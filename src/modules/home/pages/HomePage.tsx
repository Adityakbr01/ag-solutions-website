import { Main } from "@/components/ui/Semantic";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { ProductsSection } from "../components/ProductsSection";
import { ServicesSection } from "../components/ServicesSection";
import { StatsStrip } from "../components/StatsStrip";
import { HomeSEO } from "../seo/HomeSEO";

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
          <ServicesSection />
          <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-border to-transparent" />
          <AboutSection />
          <ProductsSection />
          <PortfolioSection />
          <ContactSection />
        </Main>
      </div>
    </>
  );
};

export default HomePage;
