import React from "react";
import { SEO } from "@/components/seo/SEO";
import { JsonLd } from "@/components/seo/JsonLd";

/**
 * SEO Manager for the Home module.
 * Combines standard head tags with structured data (JSON-LD) for search visibility.
 */
export const HomeSEO: React.FC = () => {
  const homeSchema = {
    "@type": "WebSite",
    "name": "AG Solutions",
    "url": "https://ag-solutions.in",
    "description": "Web development, mobile app development, desktop applications, digital marketing, and export documentation software from AG Solutions."
  };

  return (
    <>
      <SEO
        title="AG Solutions - Web & Mobile App Development"
        description="AG Solutions builds scalable web apps, mobile apps, desktop software, digital marketing systems, and export documentation products for growing businesses."
        keywords={["AG Solutions", "web development", "mobile app development", "digital marketing", "export documentation software"]}
        ogType="website"
      />
      <JsonLd schema={homeSchema} />
    </>
  );
};

export default HomeSEO;
