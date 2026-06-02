import type { FormEvent } from "react";
import { motion } from "motion/react";
import { HomeIcon, type HomeIconName } from "@/modules/home/components/HomeIcon";
import { contactInfo } from "@/modules/home/data/homeContent";
import { ContactSEO } from "../seo/ContactSEO";

const formFields = [
  {
    id: "full-name",
    name: "fullName",
    label: "Full name",
    type: "text",
    autoComplete: "name",
  },
  {
    id: "email",
    name: "email",
    label: "Email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "phone-number",
    name: "phoneNumber",
    label: "Phone number",
    type: "tel",
    autoComplete: "tel",
  },
  {
    id: "subject",
    name: "subject",
    label: "Subject",
    type: "text",
    autoComplete: "off",
  },
] as const;

const contactMethods: Array<{
  href: string;
  icon: HomeIconName;
  label: string;
  value: string;
}> = [
  {
    href: contactInfo.emailHref,
    icon: "mail",
    label: "Email us",
    value: contactInfo.email,
  },
  {
    href: contactInfo.phoneHref,
    icon: "phone",
    label: "Call us",
    value: contactInfo.phoneDisplay,
  },
  {
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      contactInfo.location,
    )}`,
    icon: "mapPin",
    label: "Our location",
    value: contactInfo.location,
  },
];

function DecorativeCircuitLines() {
  return (
    <>
      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-20 hidden h-64 w-80 text-foreground/20 dark:text-white/[0.16] md:block"
        fill="none"
        initial={{ opacity: 0, x: -18 }}
        animate={{ opacity: [0.52, 0.9, 0.52], x: [-4, 6, -4] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        viewBox="0 0 320 260"
      >
        <path
          d="M2 24c34 0 38 46 70 46h86"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <path
          d="M0 132h44c42 0 39 54 82 54h98"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <path
          d="M102 70h70"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <circle cx="176" cy="70" r="4" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="230" cy="186" r="4" stroke="currentColor" strokeWidth="1.2" />
      </motion.svg>

      <motion.svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-32 hidden h-72 w-96 text-foreground/20 dark:text-white/[0.18] md:block"
        fill="none"
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: [0.48, 0.88, 0.48], x: [4, -7, 4] }}
        transition={{
          delay: 0.8,
          duration: 9,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        viewBox="0 0 380 280"
      >
        <path
          d="M378 60h-92c-30 0-34 30-62 30h-64"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <path
          d="M380 198h-70c-48 0-48-50-92-50h-60"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <path
          d="M160 90h-34"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.2"
        />
        <circle cx="154" cy="90" r="4" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="154" cy="148" r="4" stroke="currentColor" strokeWidth="1.2" />
      </motion.svg>
    </>
  );
}

function ContactMethodCard({
  href,
  icon,
  index,
  label,
  value,
}: (typeof contactMethods)[number] & { index: number }) {
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      animate={{ opacity: 1, y: 0 }}
      className="group flex min-h-[74px] items-center gap-4 rounded-[14px] border border-foreground/[0.08] bg-white/75 p-3 text-left shadow-[0_20px_60px_rgba(20,16,10,0.12)] ring-1 ring-white/70 backdrop-blur-xl transition hover:border-foreground/[0.16] hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 dark:border-white/[0.08] dark:bg-white/[0.055] dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)] dark:ring-white/[0.035] dark:hover:border-white/[0.16] dark:hover:bg-white/[0.08] dark:focus-visible:ring-white/35"
      href={href}
      initial={{ opacity: 0, y: 18 }}
      rel={isExternal ? "noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      transition={{ delay: 0.18 + index * 0.08, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -3 }}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-foreground/[0.09] bg-background text-foreground shadow-inner dark:border-white/[0.09] dark:bg-black/35 dark:text-white">
        <HomeIcon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground dark:text-white">
          {label}
        </span>
        <span className="mt-1 block truncate text-xs text-muted-foreground dark:text-white/58">
          {value}
        </span>
      </span>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/[0.07] text-foreground/85 transition group-hover:bg-foreground group-hover:text-background dark:bg-white/[0.07] dark:text-white/85 dark:group-hover:bg-white dark:group-hover:text-black">
        <HomeIcon name="arrowRight" className="h-4 w-4 -rotate-45" />
      </span>
    </motion.a>
  );
}

function ContactInput({
  autoComplete,
  id,
  label,
  name,
  type,
}: (typeof formFields)[number]) {
  return (
    <div>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className="h-14 w-full rounded-[12px] border border-foreground/[0.1] bg-white/85 px-5 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition placeholder:text-muted-foreground focus:border-accent/55 focus:bg-white focus:ring-2 focus:ring-accent/[0.18] dark:border-white/[0.08] dark:bg-white/[0.055] dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] dark:placeholder:text-white/54 dark:focus:border-white/30 dark:focus:bg-white/[0.08] dark:focus:ring-white/[0.08]"
        id={id}
        name={name}
        placeholder={label}
        required
        type={type}
      />
    </div>
  );
}

export const ContactPage = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <ContactSEO />
      <main className="relative min-h-[calc(100vh-7rem)] overflow-hidden bg-background text-foreground dark:bg-[#020404] dark:text-white">
        <motion.div
          animate={{
            backgroundPosition: ["50% 0%, 0% 0%", "54% 2%, 0% 0%", "50% 0%, 0% 0%"],
          }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(32,128,101,0.18)_0%,rgba(236,229,205,0.72)_31%,rgba(250,248,242,0)_67%),linear-gradient(180deg,#fbfaf5_0%,#f1ead8_42%,#fbfaf5_100%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(72,147,124,0.34)_0%,rgba(12,44,38,0.34)_31%,rgba(2,4,4,0)_67%),linear-gradient(180deg,#000_0%,#06100e_42%,#020202_100%)]"
          transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,16,10,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(20,16,10,0.045)_1px,transparent_1px)] bg-[size:74px_74px] opacity-40 dark:bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] dark:opacity-25" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/70 to-transparent dark:from-black dark:via-black/70" />
        <DecorativeCircuitLines />

        <section className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col px-5 py-14 md:px-10 lg:py-20">
          <div className="relative grid flex-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] xl:gap-16">
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-[-4.25rem] -z-10 -translate-x-1/2 font-display text-[clamp(5rem,16vw,15rem)] font-black uppercase leading-none tracking-[0.08em] text-foreground/[0.055] dark:text-white/[0.045] md:top-[-6rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: [0, -7, 0] }}
              transition={{
                opacity: { duration: 0.8, ease: "easeOut" },
                y: { delay: 0.8, duration: 7, ease: "easeInOut", repeat: Infinity },
              }}
            >
              Contact
            </motion.span>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto w-full max-w-[560px] lg:mx-0"
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.62, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-foreground/[0.1] bg-white/75 px-4 py-2 text-xs font-semibold text-foreground shadow-[0_12px_34px_rgba(20,16,10,0.12)] backdrop-blur-xl dark:border-white/[0.1] dark:bg-white/[0.07] dark:text-white dark:shadow-[0_12px_34px_rgba(0,0,0,0.25)]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/[0.08] dark:bg-white/[0.08]">
                  <HomeIcon name="mail" className="h-3.5 w-3.5" />
                </span>
                Contact
              </span>

              <h1 className="mt-6 font-display text-4xl font-black leading-tight text-foreground dark:text-white sm:text-5xl">
                Get in touch
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground dark:text-white/58">
                Have questions or ready to transform your business with smart
                digital solutions?
              </p>

              <div className="mt-12 space-y-3">
                {contactMethods.map((method, index) => (
                  <ContactMethodCard {...method} index={index} key={method.label} />
                ))}
              </div>
            </motion.div>

            <motion.form
              animate={{ opacity: 1, scale: 1, y: 0 }}
              aria-label="Contact enquiry form"
              className="mx-auto w-full max-w-[590px] rounded-[18px] border border-foreground/[0.08] bg-white/72 p-2 shadow-[0_28px_90px_rgba(20,16,10,0.16)] ring-1 ring-white/70 backdrop-blur-2xl dark:border-white/[0.08] dark:bg-black/35 dark:shadow-[0_28px_90px_rgba(0,0,0,0.55)] dark:ring-white/[0.035]"
              initial={{ opacity: 0, scale: 0.97, y: 28 }}
              onSubmit={handleSubmit}
              transition={{ delay: 0.12, duration: 0.68, ease: "easeOut" }}
            >
              <div className="space-y-2.5">
                {formFields.map((field) => (
                  <ContactInput {...field} key={field.id} />
                ))}

                <div>
                  <label className="sr-only" htmlFor="details">
                    Details
                  </label>
                  <textarea
                    className="min-h-[190px] w-full resize-none rounded-[12px] border border-foreground/[0.1] bg-white/85 px-5 py-4 text-sm text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] outline-none transition placeholder:text-muted-foreground focus:border-accent/55 focus:bg-white focus:ring-2 focus:ring-accent/[0.18] dark:border-white/[0.08] dark:bg-white/[0.055] dark:text-white dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.035)] dark:placeholder:text-white/54 dark:focus:border-white/30 dark:focus:bg-white/[0.08] dark:focus:ring-white/[0.08]"
                    id="details"
                    name="details"
                    placeholder="Details"
                    required
                  />
                </div>

                <button
                  className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-[12px] bg-foreground text-sm font-bold text-background transition hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 dark:bg-white dark:text-black dark:hover:bg-white/90 dark:focus-visible:ring-white/50"
                  type="submit"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-background/35 to-transparent transition-transform duration-700 group-hover:translate-x-[430%] dark:via-black/25" />
                  <span className="relative">Submit</span>
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
