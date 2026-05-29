import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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

type DesktopDropdown = "services" | "products";

const serviceDescriptions: Record<(typeof serviceNavLinks)[number]["href"], string> = {
  "web_development.php": "Fast web apps, portals, and business platforms.",
  "mobile_app.php": "iOS and Android apps shaped for real workflows.",
  "desktop.php": "Reliable desktop software and legacy modernization.",
};

const productDescriptions: Record<(typeof productNavLinks)[number]["href"], string> = {
  "export.php": "Export documentation, returns, claims, and reporting.",
  "ease.php": "Marketing operations for campaigns, SEO, and analytics.",
  "group_meeting.php": "Community and networking workflows in one place.",
};

const serviceDropdownLinks = serviceNavLinks.map((service) => ({
  ...service,
  description: serviceDescriptions[service.href],
}));

const productDropdownLinks = productNavLinks.map((product) => ({
  ...product,
  description: productDescriptions[product.href],
}));

const dropdownPanelVariants: Variants = {
  closed: {
    opacity: 0,
    x: "-50%",
    y: -10,
    rotateX: -16,
    scaleY: 0.86,
    filter: "blur(6px)",
  },
  open: {
    opacity: 1,
    x: "-50%",
    y: 0,
    rotateX: 0,
    scaleY: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 34,
      mass: 0.7,
      delayChildren: 0.04,
      staggerChildren: 0.04,
    },
  },
  exit: {
    opacity: 0,
    x: "-50%",
    y: -8,
    rotateX: -10,
    scaleY: 0.92,
    filter: "blur(5px)",
    transition: {
      duration: 0.16,
      ease: "easeInOut",
    },
  },
};

const dropdownItemVariants: Variants = {
  closed: { opacity: 0, y: -5 },
  open: { opacity: 1, y: 0 },
};

interface DesktopDropdownMenuProps<TIcon extends string> {
  activeDropdown: DesktopDropdown | null;
  eyebrow: string;
  id: string;
  label: string;
  links: ReadonlyArray<{
    description: string;
    href: string;
    icon: TIcon;
    label: string;
  }>;
  onClose: () => void;
  onOpen: (dropdown: DesktopDropdown) => void;
  renderIcon: (icon: TIcon) => ReactNode;
  summary: string;
  type: DesktopDropdown;
  widthClassName: string;
}

function DesktopDropdownMenu<TIcon extends string>({
  activeDropdown,
  eyebrow,
  id,
  label,
  links,
  onClose,
  onOpen,
  renderIcon,
  summary,
  type,
  widthClassName,
}: DesktopDropdownMenuProps<TIcon>) {
  const isOpen = activeDropdown === type;

  return (
    <NavigationMenuItem
      className="relative"
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;

        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          onClose();
        }
      }}
      onMouseEnter={() => onOpen(type)}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        aria-controls={id}
        aria-expanded={isOpen}
        className="inline-flex h-10 items-center justify-center gap-1.5 rounded-md bg-transparent px-0 py-0 text-sm font-normal leading-none text-muted-foreground transition hover:text-foreground focus:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        onClick={() => onOpen(type)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            event.preventDefault();
            onClose();
          }
        }}
      >
        {label}
        <motion.svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="relative top-px h-3.5 w-3.5 shrink-0"
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <path
            d="m5 7.5 5 5 5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id={id}
            role="menu"
            variants={dropdownPanelVariants}
            initial="closed"
            animate="open"
            exit="exit"
            className={`absolute left-1/2 top-full z-50 mt-3 overflow-hidden rounded-lg border border-border bg-popover text-popover-foreground shadow-2xl ring-1 ring-foreground/5 dark:border-white/[0.08] dark:bg-[#131312] dark:ring-white/10 ${widthClassName}`}
            style={{
              transformOrigin: "top center",
              transformPerspective: 900,
            }}
          >
            <div className="border-b border-border/80 bg-muted/40 px-4 py-3 dark:border-white/[0.08] dark:bg-white/[0.03]">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-accent-strong dark:text-accent">
                {eyebrow}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {summary}
              </p>
            </div>

            <div className="grid gap-1 p-2">
              {links.map((link) => (
                <motion.a
                  href={link.href}
                  role="menuitem"
                  variants={dropdownItemVariants}
                  className="group flex items-start gap-4 rounded-md px-4 py-3 text-sm text-muted-foreground transition hover:bg-accent/10 hover:text-accent-strong focus:bg-accent/10 focus:text-accent-strong focus-visible:outline-none dark:text-[#d8d8cf] dark:hover:text-accent dark:focus:text-accent"
                  key={link.href}
                >
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground transition group-hover:border-accent/40 group-hover:text-accent-strong dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-[#fafaf8] dark:group-hover:text-accent">
                    {renderIcon(link.icon)}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground transition group-hover:text-accent-strong dark:text-[#fafaf8] dark:group-hover:text-accent">
                      {link.label}
                    </span>
                    <span className="mt-1 block text-xs font-normal leading-5 text-muted-foreground">
                      {link.description}
                    </span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </NavigationMenuItem>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DesktopDropdown | null>(
    null
  );

  const closeMenu = () => setIsOpen(false);
  const closeDropdown = () => setActiveDropdown(null);
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

              <DesktopDropdownMenu
                activeDropdown={activeDropdown}
                eyebrow="Digital services"
                id="services-dropdown"
                label="Services"
                links={serviceDropdownLinks}
                onClose={closeDropdown}
                onOpen={setActiveDropdown}
                renderIcon={(icon) => <ServiceDropdownIcon name={icon} />}
                summary="Choose the delivery lane for your next software build."
                type="services"
                widthClassName="w-[390px]"
              />

              <DesktopDropdownMenu
                activeDropdown={activeDropdown}
                eyebrow="Product suite"
                id="products-dropdown"
                label="Products"
                links={productDropdownLinks}
                onClose={closeDropdown}
                onOpen={setActiveDropdown}
                renderIcon={(icon) => <ProductDropdownIcon name={icon} />}
                summary="SaaS-ready platforms for operations, marketing, and communities."
                type="products"
                widthClassName="w-[430px]"
              />

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
