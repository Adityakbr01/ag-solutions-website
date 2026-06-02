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
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "/contact" },
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

export const stats: Array<{
  value: string;
  suffix: string;
  label: string;
  icon: HomeIconName;
  accent: string;
}> = [
  {
    value: "10",
    suffix: "+",
    label: "Years of Service",
    icon: "clock",
    accent: "#38bdf8",
  },
  {
    value: "200",
    suffix: "+",
    label: "Satisfied Clients",
    icon: "users",
    accent: "#22c55e",
  },
  {
    value: "95",
    suffix: "%",
    label: "Client Retention Rate",
    icon: "check",
    accent: "#f97316",
  },
  {
    value: "50",
    suffix: "+",
    label: "Expert Professionals",
    icon: "sparkles",
    accent: "#ff2d6f",
  },
];

export const services: Array<{
  title: string;
  description: string;
  icon: HomeIconName;
  accent: string;
  features: string[];
  ctaLabel: string;
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
    icon: "globe",
    accent: "#38bdf8",
    features: [
      "Responsive web platforms",
      "Secure backend systems",
      "Performance optimization",
    ],
    ctaLabel: "Build My Website",
    image: {
      alt: "Web development interface illustration",
      src: "/images/apiImage.webp",
    },
    href: "#contact",
  },
  {
    title: "Mobile App Development",
    description:
      "Enterprise mobility solutions for iOS and Android, from strategy and design through development, testing, and deployment.",
    icon: "smartphone",
    accent: "#22c55e",
    features: [
      "iOS and Android apps",
      "Cross-platform builds",
      "Testing and launch support",
    ],
    ctaLabel: "Launch My App",
    image: {
      alt: "Mobile app development illustration",
      src: "/images/mobileDevelopemnt.webp",
    },
    href: "#contact",
  },
  {
    title: "Desktop Applications",
    description:
      "Legacy migrations or greenfield builds with lower risk, clear timelines, and practical cross-platform desktop expertise.",
    icon: "monitor",
    accent: "#f97316",
    features: [
      "Business workflow tools",
      "Legacy modernization",
      "Secure offline systems",
    ],
    ctaLabel: "Create My App",
    image: {
      alt: "Desktop application solution illustration",
      src: "/images/sale.webp",
    },
    href: "#contact",
  },
  {
    title: "Email Marketing",
    description:
      "Tailored campaigns for each audience segment that engage new customers and nurture existing relationships with measurable ROI.",
    icon: "mail",
    accent: "#f59e0b",
    features: [
      "Campaign planning",
      "Automated journeys",
      "Templates and analytics",
    ],
    ctaLabel: "Plan Campaigns",
    image: {
      alt: "Email marketing campaign illustration",
      src: "/images/email-marketing-campaign-announcement.webp",
    },
    href: "#contact",
  },
  {
    title: "Digital Marketing",
    description:
      "PPC, SEO, and SMM strategies that give your brand first-page visibility and stronger reach across search and social channels.",
    icon: "trendingUp",
    accent: "#ff2d6f",
    features: [
      "SEO and local visibility",
      "Paid media campaigns",
      "Lead generation funnels",
    ],
    ctaLabel: "Grow My Reach",
    image: {
      alt: "Digital marketing promotion illustration",
      src: "/images/online-marketing-promotion-3d-cartoon.webp",
    },
    href: "#contact",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Have a unique challenge? We build bespoke software that solves problems no off-the-shelf product can handle.",
    icon: "sparkles",
    accent: "#22c55e",
    features: [
      "Workflow automation",
      "Integrations and APIs",
      "Custom dashboards",
    ],
    ctaLabel: "Design My Solution",
    image: {
      alt: "Custom software solution illustration",
      src: "/images/customeSolution.webp",
    },
    href: "#contact",
    highlighted: true,
  },
];

export const aboutFeatures: Array<{
  title: string;
  description: string;
  icon: HomeIconName;
  accent: string;
}> = [
  {
    title: "Reliable",
    description: "Commitments kept, deadlines met, and delivery handled with care.",
    icon: "check",
    accent: "#22c55e",
  },
  {
    title: "Always Available",
    description: "Support that is close by when your team needs it most.",
    icon: "clock",
    accent: "#38bdf8",
  },
  {
    title: "Creative UI",
    description: "Unique, memorable interfaces designed for real users.",
    icon: "sparkles",
    accent: "#ff2d6f",
  },
  {
    title: "Proven Track Record",
    description: "Hundreds of successful deliveries across industries.",
    icon: "chart",
    accent: "#f97316",
  },
];

export const techStack: Array<{
  name: string;
  image: {
    alt: string;
    src: string;
  };
}> = [
  {
    name: "React",
    image: {
      alt: "React logo",
      src: "/images/tech-stack/react.svg",
    },
  },
  {
    name: "Node.js",
    image: {
      alt: "Node.js logo",
      src: "/images/tech-stack/node-js.svg",
    },
  },
  {
    name: "Flutter",
    image: {
      alt: "Flutter logo",
      src: "/images/tech-stack/flutter.svg",
    },
  },
  {
    name: "PHP / Laravel",
    image: {
      alt: "PHP and Laravel logo",
      src: "/images/tech-stack/php-laravel.svg",
    },
  },
  {
    name: "React Native",
    image: {
      alt: "React Native logo",
      src: "/images/tech-stack/react-native.svg",
    },
  },
  {
    name: "Python",
    image: {
      alt: "Python logo",
      src: "/images/tech-stack/python.svg",
    },
  },
  {
    name: "MySQL",
    image: {
      alt: "MySQL logo",
      src: "/images/tech-stack/mysql.svg",
    },
  },
  {
    name: "MongoDB",
    image: {
      alt: "MongoDB logo",
      src: "/images/tech-stack/mongodb.svg",
    },
  },
  {
    name: "AWS",
    image: {
      alt: "AWS logo",
      src: "/images/tech-stack/aws.svg",
    },
  },
  {
    name: "Firebase",
    image: {
      alt: "Firebase logo",
      src: "/images/tech-stack/firebase.svg",
    },
  },
];

export const productFeatures = [
  "Complete export document management",
  "Monthly returns and scheme claims tracking",
  "Real-time reporting dashboard",
  "Cloud-based, accessible anywhere",
];

export const products: Array<{
  badge: string;
  title: string;
  description: string;
  icon: HomeIconName;
  accent: string;
}> = [
  {
    badge: "Marketing",
    title: "EASE Marketing Platform",
    description:
      "A digital marketing suite designed to streamline PPC campaigns, SEO tracking, and audience analytics in one place.",
    icon: "trendingUp",
    accent: "#ff2d6f",
  },
  {
    badge: "Community",
    title: "Grow Together",
    description:
      "A collaborative group meeting and networking platform that connects professionals and businesses to grow together.",
    icon: "users",
    accent: "#22c55e",
  },
];

export const portfolioItems: Array<{
  title: string;
  description: string;
  tag: string;
  icon: HomeIconName;
  accent: string;
  image: {
    alt: string;
    src: string;
  };
}> = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack storefront with inventory management and payment gateway integration.",
    tag: "Web Development",
    icon: "shoppingCart",
    accent: "#38bdf8",
    image: {
      alt: "Web development project preview",
      src: "/images/apiImage.webp",
    },
  },
  {
    title: "Grow Together App",
    description:
      "Community networking mobile app for Android and iOS with real-time messaging.",
    tag: "Mobile App",
    icon: "users",
    accent: "#22c55e",
    image: {
      alt: "Mobile app project preview",
      src: "/images/mobileDevelopemnt.webp",
    },
  },
  {
    title: "Export Management System",
    description:
      "End-to-end web application for export documentation and compliance.",
    tag: "Web Application",
    icon: "chart",
    accent: "#f97316",
    image: {
      alt: "Export management project preview",
      src: "/images/sale.webp",
    },
  },
  {
    title: "Marketing Campaign Suite",
    description:
      "Campaign planning and reporting workspace for search, social, and email growth teams.",
    tag: "Digital Marketing",
    icon: "trendingUp",
    accent: "#ff2d6f",
    image: {
      alt: "Digital marketing project preview",
      src: "/images/online-marketing-promotion-3d-cartoon.webp",
    },
  },
  {
    title: "Custom Automation Dashboard",
    description:
      "Internal automation dashboard connecting operations, APIs, reports, and daily workflows.",
    tag: "Custom Software",
    icon: "sparkles",
    accent: "#8b5cf6",
    image: {
      alt: "Custom software project preview",
      src: "/images/customeSolution.webp",
    },
  },
  {
    title: "Email Automation Journeys",
    description:
      "Lifecycle campaigns, automated sequences, and reporting templates for stronger customer retention.",
    tag: "Email Marketing",
    icon: "mail",
    accent: "#f59e0b",
    image: {
      alt: "Email automation project preview",
      src: "/images/email-marketing-campaign-announcement.webp",
    },
  },
  {
    title: "API Integration Hub",
    description:
      "Connected API workflows that move data cleanly between dashboards, teams, and business tools.",
    tag: "Integrations",
    icon: "globe",
    accent: "#06b6d4",
    image: {
      alt: "API integration project preview",
      src: "/images/apiImage.webp",
    },
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
