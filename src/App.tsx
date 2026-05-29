import React from "react";
import { ReactLenis } from "lenis/react";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { router } from "@/router";
import "lenis/dist/lenis.css";

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
        <ReactLenis root options={{ anchors: true, autoRaf: true }}>
          <RouterProvider router={router} />
        </ReactLenis>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
