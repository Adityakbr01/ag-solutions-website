import React from "react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { router } from "@/router";

/**
 * Root Application Component.
 * Integrates global context providers like Helmet (SEO) and React Router.
 */
export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        disableTransitionOnChange
        enableSystem
      >
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
