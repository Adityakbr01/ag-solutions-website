import React from "react";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO } from "@/components/seo/SEO";
import { contactInfo } from "@/modules/home/data/homeContent";

export const ContactSEO: React.FC = () => {
  const contactSchema = {
    "@type": "ContactPage",
    name: "Contact AG Solutions",
    description:
      "Contact AG Solutions for web development, mobile apps, desktop software, and digital marketing support.",
    url: "https://ag-solutions-website.pages.dev/contact",
    mainEntity: {
      "@type": "Organization",
      name: "AG Solutions",
      email: contactInfo.email,
      telephone: contactInfo.phoneDisplay,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactInfo.location,
      },
    },
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with AG Solutions for software, web, mobile, and digital business solutions."
        keywords={[
          "contact AG Solutions",
          "software development contact",
          "web development enquiry",
          "Bengaluru software company",
        ]}
      />
      <JsonLd schema={contactSchema} />
    </>
  );
};

export default ContactSEO;
