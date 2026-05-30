import type { HomeIconName } from "../components/HomeIcon";

export const contactInfo = {
  phoneDisplay: "+91 8867171060",
  phoneHref: "tel:+918867171060",
  email: "info@ag-solutions.in",
  emailHref: "mailto:info@ag-solutions.in",
  hours: "Mon-Fri - 10am-7pm IST",
  location: "Jayanagara 9th Block, Bengaluru 560069",
};

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
];

export const serviceNavLinks = [
  {
    label: "Web Development",
    href: "web_development.php",
    icon: "web",
  },
  {
    label: "Mobile app Development",
    href: "mobile_app.php",
    icon: "mobile",
  },
  {
    label: "Desktop Applications",
    href: "desktop.php",
    icon: "desktop",
  },
] as const;

export const productNavLinks = [
  {
    label: "Export Documentation and Management Solutions",
    href: "export.php",
    icon: "export",
  },
  {
    label: "EASE Marketing",
    href: "ease.php",
    icon: "marketing",
  },
  {
    label: "Grow Together",
    href: "group_meeting.php",
    icon: "group",
  },
] as const;

export const heroTechRows = [
  { name: "React / Next.js", scope: "Web", tone: "cyan" },
  { name: "Flutter / RN", scope: "Mobile", tone: "lime" },
  { name: "Node / PHP", scope: "Backend", tone: "green" },
];

export const stats = [
  { value: "10", suffix: "+", label: "Years of Service" },
  { value: "200", suffix: "+", label: "Satisfied Clients" },
  { value: "95", suffix: "%", label: "Client Retention Rate" },
  { value: "50", suffix: "+", label: "Expert Professionals" },
];

export const services: Array<{
  title: string;
  description: string;
  image: {
    alt: string;
    src: string;
  };
  href: string;
  highlighted?: boolean;
}> = [
  {
    title: "Web Development",
    description:
      "End-to-end web solutions combining the latest technologies with robust project management, from landing pages to complex enterprise platforms.",
    image: {
      alt: "Web development interface illustration",
      src: "/images/apiImage.png",
    },
    href: "#contact",
  },
  {
    title: "Mobile App Development",
    description:
      "Enterprise mobility solutions for iOS and Android, from strategy and design through development, testing, and deployment.",
    image: {
      alt: "Mobile app development illustration",
      src: "/images/mobileDevelopemnt.png",
    },
    href: "#contact",
  },
  {
    title: "Desktop Applications",
    description:
      "Legacy migrations or greenfield builds with lower risk, clear timelines, and practical cross-platform desktop expertise.",
    image: {
      alt: "Desktop application solution illustration",
      src: "/images/sale.png",
    },
    href: "#contact",
  },
  {
    title: "Email Marketing",
    description:
      "Tailored campaigns for each audience segment that engage new customers and nurture existing relationships with measurable ROI.",
    image: {
      alt: "Email marketing campaign illustration",
      src: "/images/email-marketing-campaign-announcement.png",
    },
    href: "#contact",
  },
  {
    title: "Digital Marketing",
    description:
      "PPC, SEO, and SMM strategies that give your brand first-page visibility and stronger reach across search and social channels.",
    image: {
      alt: "Digital marketing promotion illustration",
      src: "/images/online-marketing-promotion-3d-cartoon.png",
    },
    href: "#contact",
  },
  {
    title: "Custom Solutions",
    description:
      "Have a unique challenge? We build bespoke software that solves problems no off-the-shelf product can handle.",
    image: {
      alt: "Custom software solution illustration",
      src: "/images/customeSolution.png",
    },
    href: "#contact",
    highlighted: true,
  },
];

export const aboutFeatures = [
  {
    title: "Reliable",
    description: "Commitments kept, deadlines met, and delivery handled with care.",
  },
  {
    title: "Always Available",
    description: "Support that is close by when your team needs it most.",
  },
  {
    title: "Creative UI",
    description: "Unique, memorable interfaces designed for real users.",
  },
  {
    title: "Proven Track Record",
    description: "Hundreds of successful deliveries across industries.",
  },
];

export const techStack = [
  "React",
  "Node.js",
  "Flutter",
  "PHP / Laravel",
  "React Native",
  "Python",
  "MySQL",
  "MongoDB",
  "AWS",
  "Firebase",
];

export const productFeatures = [
  "Complete export document management",
  "Monthly returns and scheme claims tracking",
  "Real-time reporting dashboard",
  "Cloud-based, accessible anywhere",
];

export const products = [
  {
    badge: "Marketing",
    title: "EASE Marketing Platform",
    description:
      "A digital marketing suite designed to streamline PPC campaigns, SEO tracking, and audience analytics in one place.",
  },
  {
    badge: "Community",
    title: "Grow Together",
    description:
      "A collaborative group meeting and networking platform that connects professionals and businesses to grow together.",
  },
];

export const portfolioItems: Array<{
  title: string;
  description: string;
  tag: string;
  icon: HomeIconName;
}> = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with inventory management and payment gateway integration.",
    tag: "Web Development",
    icon: "shoppingCart",
  },
  {
    title: "Grow Together App",
    description:
      "Community networking mobile app for Android and iOS with real-time messaging.",
    tag: "Mobile App",
    icon: "users",
  },
  {
    title: "Export Management System",
    description:
      "End-to-end web application for export documentation and compliance.",
    tag: "Web Application",
    icon: "chart",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      "Web Development",
      "Mobile Apps",
      "Desktop Apps",
      "Email Marketing",
      "Digital Marketing",
    ],
  },
  {
    title: "Products",
    links: ["EDMS", "EASE Marketing", "Grow Together"],
  },
  {
    title: "Company",
    links: ["About Us", "Portfolio", "Contact", "LinkedIn", "Facebook"],
  },
];
