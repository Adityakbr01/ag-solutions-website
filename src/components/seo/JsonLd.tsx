import React from "react";
import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  /**
   * The structured data object (e.g., Organization, Website, Article)
   */
  schema: Record<string, unknown>;
}

/**
 * Reusable component to safely render JSON-LD structured data in the document head.
 * Helps search engines extract rich snippets and metadata about the page.
 */
export const JsonLd: React.FC<JsonLdProps> = React.memo(({ schema }) => {
  // Ensure the schema contains the context
  const schemaWithContext = {
    "@context": "https://schema.org",
    ...schema,
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaWithContext)}
      </script>
    </Helmet>
  );
});

JsonLd.displayName = "JsonLd";
export default JsonLd;
