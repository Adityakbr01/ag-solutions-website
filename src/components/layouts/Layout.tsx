import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SkipToContent } from "@/components/ui/SkipToContent";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));

      if (!target) {
        return;
      }

      const lenis = window.__lenis;

      if (lenis) {
        lenis.scrollTo(target);
        return;
      }

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash, pathname]);

  return null;
}

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      <SkipToContent />
      <ScrollToHash />
      <SiteHeader />
      <div className="flex-1">
        <Outlet />
      </div>
      <SiteFooter />
    </div>
  );
}

export default Layout;
