import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HomeIcon } from "@/modules/home/components/HomeIcon";
import { ServiceDropdownIcon } from "@/modules/home/components/ServiceDropdownIcon";
import {
  contactInfo,
  navLinks,
  productNavLinks,
  serviceNavLinks,
} from "@/modules/home/data/homeContent";
import { ProductDropdownIcon } from "@/modules/home/components/ProductDropdownIcon";

const homeHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const aboutLink = navLinks.find((link) => link.label === "About");
  const remainingLinks = navLinks.filter(
    (link) => link.label !== "About" && link.label !== "Products",
  );

  return (
    <>
      <nav
        aria-label="Primary site navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-12"
      >
        <a
          href="/"
          className="font-display text-xl font-extrabold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={closeMenu}
        >
          AG<span className="text-accent-strong dark:text-accent">.</span>
          Solutions
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <NavigationMenu
            viewport={false}
            className="relative z-50 flex flex-none items-center justify-center"
          >
            <NavigationMenuList className="flex list-none items-center gap-8">
              {aboutLink ? (
                <NavigationMenuItem className="relative">
                  <NavigationMenuLink asChild>
                    <a
                      href={homeHref(aboutLink.href)}
                      className="inline-flex h-10 items-center rounded-md text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {aboutLink.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : null}

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-transparent px-0 py-0 text-sm font-normal leading-none text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground data-open:bg-transparent data-popup-open:bg-transparent [&_svg]:mt-0">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-1/2 top-full z-50 mt-3 w-[330px] -translate-x-1/2 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-2xl ring-0 dark:border-white/[0.08] dark:bg-[#131312]">
                  <div className="grid gap-1">
                    {serviceNavLinks.map((service) => (
                      <NavigationMenuLink asChild key={service.href}>
                        <a
                          href={service.href}
                          className="flex items-center gap-4 rounded-md px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-accent/10 hover:text-accent-strong focus:bg-accent/10 focus:text-accent-strong focus-visible:outline-none dark:text-[#d8d8cf] dark:hover:text-accent dark:focus:text-accent"
                        >
                          <ServiceDropdownIcon name={service.icon} />
                          <span>{service.label}</span>
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-transparent px-0 py-0 text-sm font-normal leading-none text-muted-foreground hover:bg-transparent hover:text-foreground focus:bg-transparent focus:text-foreground data-open:bg-transparent data-popup-open:bg-transparent [&_svg]:mt-0">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-1/2 top-full z-50 mt-3 w-[420px] -translate-x-1/2 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-2xl ring-0 dark:border-white/[0.08] dark:bg-[#131312]">
                  <div className="grid gap-1">
                    {productNavLinks.map((product) => (
                      <NavigationMenuLink asChild key={product.href}>
                        <a
                          href={product.href}
                          className="flex items-center gap-4 rounded-md px-4 py-3 text-sm font-semibold text-muted-foreground transition hover:bg-accent/10 hover:text-accent-strong focus:bg-accent/10 focus:text-accent-strong focus-visible:outline-none dark:text-[#d8d8cf] dark:hover:text-accent dark:focus:text-accent"
                        >
                          <ProductDropdownIcon name={product.icon} />
                          <span>{product.label}</span>
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {remainingLinks.map((link) => (
                <NavigationMenuItem className="relative" key={link.href}>
                  <NavigationMenuLink asChild>
                    <a
                      href={homeHref(link.href)}
                      className="inline-flex h-10 items-center rounded-md text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link.label}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <a
            href="/#contact"
            className="inline-flex min-h-10 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition hover:bg-accent/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get a Quote
            <HomeIcon name="arrowRight" className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground md:hidden dark:border-white/10 dark:text-[#fafaf8]"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <HomeIcon name={isOpen ? "x" : "menu"} className="h-5 w-5" />
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-border bg-background px-5 py-4 dark:border-white/[0.08] dark:bg-[#0f0f0e] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {serviceNavLinks.map((service) => (
              <a
                href={service.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-accent/10 hover:text-accent-strong dark:text-[#c9c9c0] dark:hover:bg-white/[0.04] dark:hover:text-accent"
                key={service.href}
                onClick={closeMenu}
              >
                <ServiceDropdownIcon name={service.icon} />
                {service.label}
              </a>
            ))}
            {productNavLinks.map((product) => (
              <a
                href={product.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-accent/10 hover:text-accent-strong dark:text-[#c9c9c0] dark:hover:bg-white/[0.04] dark:hover:text-accent"
                key={product.href}
                onClick={closeMenu}
              >
                <ProductDropdownIcon name={product.icon} />
                {product.label}
              </a>
            ))}
            {navLinks
              .filter((link) => link.label !== "Products")
              .map((link) => (
              <a
                href={homeHref(link.href)}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-accent/10 hover:text-foreground dark:text-[#c9c9c0] dark:hover:bg-white/[0.04] dark:hover:text-[#fafaf8]"
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground"
              onClick={closeMenu}
            >
              Get a Quote
              <HomeIcon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href={contactInfo.phoneHref}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground"
            >
              {contactInfo.phoneDisplay}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
