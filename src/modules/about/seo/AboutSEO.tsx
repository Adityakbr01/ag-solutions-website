import React from "react";
import { SEO } from "@/components/seo/SEO";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * SEO Manager for the About module.
 */
export const AboutSEO: React.FC = () => {
  const aboutSchema = {
    "@type": "AboutPage",
    "name": "About AG Solutions",
    "description": "Learn about AG Solutions' high-performance frontend architectures, core values, and modular development systems.",
    "url": "https://ag-solutions-website.pages.dev/about"
  };

  return (
    <>
      <SEO
        title="About - Core Values and Engineering"
        description="Learn more about AG Solutions engineering principles, WCAG compliance strategies, and frontend performance blueprints."
        keywords={["about us", "frontend guidelines", "coding standards", "web architecture"]}
      />
      <JsonLd schema={aboutSchema} />
    </>
  );
};

export default AboutSEO;
