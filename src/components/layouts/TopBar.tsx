import { HomeIcon } from "@/modules/home/components/HomeIcon";
import { contactInfo, socialLinks } from "@/modules/home/data/homeContent";

export function TopBar() {
  return (
    <div className="border-b border-border bg-muted px-5 py-3 text-xs text-muted-foreground transition-colors duration-300 dark:border-white/[0.08] dark:bg-[#0f0f0e] dark:text-[#888880] md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={contactInfo.phoneHref}
            className="inline-flex items-center gap-2 transition hover:text-foreground dark:hover:text-[#fafaf8]"
          >
            <HomeIcon name="phone" className="h-4 w-4" />
            {contactInfo.phoneDisplay}
          </a>
          <a
            href={contactInfo.emailHref}
            className="inline-flex items-center gap-2 transition hover:text-foreground dark:hover:text-[#fafaf8]"
          >
            <HomeIcon name="mail" className="h-4 w-4" />
            {contactInfo.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <HomeIcon name="clock" className="h-4 w-4" />
            {contactInfo.hours}
          </span>
        </div>
        <div className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              className="transition hover:text-foreground dark:hover:text-[#fafaf8]"
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
