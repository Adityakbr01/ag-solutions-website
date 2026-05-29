import { Navbar } from "./Navbar";
import { TopBar } from "./TopBar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#0a0a0a]/95">
      <TopBar />
      <Navbar />
    </header>
  );
}
