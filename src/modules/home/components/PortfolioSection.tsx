"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LazyImage from "@/components/ui/LazyImage";

gsap.registerPlugin(ScrollTrigger);

const CARD_Y_OFFSET = 5;
const CARD_SCALE_STEP = 0.075;
const STACK_DEPTH_LIMIT = 7;
const MOBILE_TAG_LIMIT = 7;
const PROJECTS_API_URL =
  "https://ag-solutions.in/webapi/public/api/getProjects/all";
const PROJECT_IMAGE_BASE_URL =
  "https://ag-solutions.in/webapi/public/assets/images/project_images/";
const NO_IMAGE_URL =
  "https://ag-solutions.in/webapi/public/assets/images/no_image.jpg";

type ProjectApiItem = {
  page: string | null;
  project_sort: number | null;
  project_name: string | null;
  project_type: string | null;
  project_description: string | null;
  project_image: string | null;
  project_image_alt: string | null;
};

type ProjectImageSource = {
  image_for: string | null;
  image_url: string | null;
};

type ProjectsApiResponse = {
  data?: ProjectApiItem[];
  image_url?: ProjectImageSource[];
};

type PortfolioProject = {
  id: string;
  tag: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  imageAlt: string;
  color: string;
  zIndex: number;
};

type PageMeta = {
  label: string;
  color: string;
  description: string;
};

const PAGE_ORDER = [
  "web_development",
  "mobile_app_development",
  "desktop_application",
  "export_documentation_and_mangement_solutions",
  "ease_marketing",
  "grow_together",
] as const;

const PAGE_META: Record<string, PageMeta> = {
  web_development: {
    label: "Web Development",
    color: "#24466f",
    description: "A live web project from the AG Solutions portfolio.",
  },
  mobile_app_development: {
    label: "Mobile App Development",
    color: "#2f6f5e",
    description: "A mobile experience built for practical business use.",
  },
  desktop_application: {
    label: "Desktop Applications",
    color: "#594a7b",
    description: "A business desktop workflow designed for daily operations.",
  },
  export_documentation_and_mangement_solutions: {
    label: "Export Documentation",
    color: "#9b5a2e",
    description: "A product screen from export documentation workflows.",
  },
  ease_marketing: {
    label: "EASE Marketing",
    color: "#8f3f54",
    description: "A product screen from the EASE Marketing platform.",
  },
  grow_together: {
    label: "Grow Together",
    color: "#286f69",
    description: "A product screen from the Grow Together platform.",
  },
};

const DEFAULT_PAGE_META: PageMeta = {
  label: "Portfolio Project",
  color: "#24466f",
  description: "A project delivered by AG Solutions.",
};

const FALLBACK_PROJECTS: PortfolioProject[] = [
  {
    id: "card-1",
    tag: "Web Development",
    title: "Websites, Portals & SaaS Platforms",
    description:
      "High-performance websites, e-commerce stores, admin dashboards, and secure backend platforms built around real business goals.",
    tech: [
      "Business Websites",
      "E-Commerce",
      "Web Portals",
      "CMS",
      "React",
      "Laravel",
      "Node.js",
      "SEO Ready",
    ],
    image: "/images/apiImage.webp",
    imageAlt: "Websites, portals, and SaaS platforms preview",
    color: "#24466f",
    zIndex: 6,
  },
  {
    id: "card-2",
    tag: "Mobile App Development",
    title: "Android, iOS & Cross-Platform Apps",
    description:
      "User-friendly mobile applications for customers, teams, and operations with clean UI, secure APIs, and launch support.",
    tech: [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
      "App UI/UX",
      "API Integration",
      "Testing",
      "Deployment",
    ],
    image: "/images/mobileDevelopemnt.webp",
    imageAlt: "Android, iOS, and cross-platform apps preview",
    color: "#2f6f5e",
    zIndex: 5,
  },
  {
    id: "card-3",
    tag: "Digital Marketing",
    title: "SEO, PPC & Social Growth Campaigns",
    description:
      "Search, paid ads, social media, and conversion-focused campaigns planned with clear reporting and measurable growth.",
    tech: [
      "SEO",
      "Google Ads",
      "Social Media",
      "Lead Funnels",
      "Analytics",
      "Landing Pages",
      "Content",
      "Reporting",
    ],
    image: "/images/online-marketing-promotion-3d-cartoon.webp",
    imageAlt: "SEO, PPC, and social growth campaigns preview",
    color: "#8f3f54",
    zIndex: 4,
  },
  {
    id: "card-4",
    tag: "Email Marketing",
    title: "Campaigns, Templates & Automation",
    description:
      "Targeted email campaigns, audience journeys, newsletters, and retention workflows that keep customers engaged.",
    tech: [
      "Newsletters",
      "Automation",
      "Segmentation",
      "Templates",
      "Drip Campaigns",
      "CRM",
      "A/B Testing",
      "ROI Reports",
    ],
    image: "/images/email-marketing-campaign-announcement.webp",
    imageAlt: "Campaigns, templates, and automation preview",
    color: "#9b5a2e",
    zIndex: 3,
  },
  {
    id: "card-5",
    tag: "Desktop Applications",
    title: "Business Tools & Internal Apps",
    description:
      "Reliable desktop applications, legacy modernization, reporting tools, and workflow systems for daily business operations.",
    tech: [
      "Windows Apps",
      "Offline Tools",
      "Reports",
      "Inventory",
      "Billing",
      "Migration",
      "Security",
      "Support",
    ],
    image: "/images/sale.webp",
    imageAlt: "Business tools and internal apps preview",
    color: "#594a7b",
    zIndex: 2,
  },
  {
    id: "card-6",
    tag: "Custom Software",
    title: "Automation, APIs & Dashboards",
    description:
      "Bespoke software solutions for unique business challenges, including integrations, dashboards, and process automation.",
    tech: [
      "Custom CRM",
      "Dashboards",
      "API Integrations",
      "Automation",
      "Cloud",
      "Databases",
      "Admin Panels",
      "Maintenance",
    ],
    image: "/images/customeSolution.webp",
    imageAlt: "Automation, APIs, and dashboards preview",
    color: "#286f69",
    zIndex: 1,
  },
] as const satisfies PortfolioProject[];

const getCleanText = (value: string | null | undefined) => value?.trim() ?? "";

const getStackDepth = (depth: number) =>
  Math.min(Math.max(depth, 0), STACK_DEPTH_LIMIT);

const getStackYPercent = (depth: number) =>
  -50 + getStackDepth(depth) * CARD_Y_OFFSET;

const getStackScale = (depth: number) =>
  1 - getStackDepth(depth) * CARD_SCALE_STEP;

const getPageMeta = (page: string | null | undefined) =>
  page ? PAGE_META[page] ?? DEFAULT_PAGE_META : DEFAULT_PAGE_META;

const getProjectImageBaseUrl = (payload: ProjectsApiResponse) =>
  payload.image_url?.find((item) => item.image_for === "Projects")?.image_url ??
  PROJECT_IMAGE_BASE_URL;

const getNoImageUrl = (payload: ProjectsApiResponse) =>
  payload.image_url?.find((item) => item.image_for === "No Image")?.image_url ??
  NO_IMAGE_URL;

const getProjectImageUrl = (
  imageName: string,
  imageBaseUrl: string,
  noImageUrl: string,
) => {
  if (!imageName) {
    return noImageUrl;
  }

  try {
    return new URL(imageName, imageBaseUrl).toString();
  } catch {
    return `${imageBaseUrl}${imageName}`;
  }
};

const buildProjectDescription = (project: ProjectApiItem, meta: PageMeta) => {
  const description = getCleanText(project.project_description);
  const projectType = getCleanText(project.project_type);

  if (description) {
    return description;
  }

  if (projectType) {
    return `${projectType} project from our ${meta.label} portfolio.`;
  }

  return meta.description;
};

const buildProjectTech = (project: ProjectApiItem, meta: PageMeta) =>
  [meta.label, getCleanText(project.project_type)].filter(Boolean);

const getPageSortIndex = (page: string | null) => {
  const index = page ? PAGE_ORDER.indexOf(page as (typeof PAGE_ORDER)[number]) : -1;

  return index === -1 ? PAGE_ORDER.length : index;
};

const normalizeProjects = (payload: ProjectsApiResponse): PortfolioProject[] => {
  const imageBaseUrl = getProjectImageBaseUrl(payload);
  const noImageUrl = getNoImageUrl(payload);
  const projects = payload.data ?? [];

  return [...projects]
    .sort((current, next) => {
      const currentSort = current.project_sort ?? Number.MAX_SAFE_INTEGER;
      const nextSort = next.project_sort ?? Number.MAX_SAFE_INTEGER;

      if (currentSort !== nextSort) {
        return currentSort - nextSort;
      }

      return getPageSortIndex(current.page) - getPageSortIndex(next.page);
    })
    .map((project, index, sortedProjects) => {
      const meta = getPageMeta(project.page);
      const title =
        getCleanText(project.project_name) || `Project ${index + 1}`;
      const imageName = getCleanText(project.project_image);
      const image = getProjectImageUrl(imageName, imageBaseUrl, noImageUrl);
      const imageAlt =
        getCleanText(project.project_image_alt) || `${title} project preview`;

      return {
        id: `${project.page ?? "project"}-${project.project_sort ?? index}-${imageName || index}`,
        tag: meta.label,
        title,
        description: buildProjectDescription(project, meta),
        tech: buildProjectTech(project, meta),
        image,
        imageAlt,
        color: meta.color,
        zIndex: sortedProjects.length - index,
      };
    });
};

export function PortfolioSection() {
  const [projects, setProjects] =
    useState<PortfolioProject[]>(FALLBACK_PROJECTS);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const projectCards = useMemo(
    () => (projects.length > 0 ? projects : FALLBACK_PROJECTS),
    [projects],
  );

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadProjects = async () => {
      try {
        const response = await fetch(PROJECTS_API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Projects request failed");
        }

        const payload = (await response.json()) as ProjectsApiResponse;
        const normalizedProjects = normalizeProjects(payload);

        if (isMounted && normalizedProjects.length > 0) {
          setProjects(normalizedProjects);
        }
      } catch {
        if (isMounted) {
          setProjects(FALLBACK_PROJECTS);
        }
      }
    };

    void loadProjects();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.slice(0, projectCards.length).filter(Boolean);
    const totalCards = cards.length;

    if (!section || totalCards === 0) {
      return;
    }

    gsap.ticker.lagSmoothing(0);

    cards.forEach((card, index) => {
      gsap.set(card, {
        xPercent: -50,
        yPercent: getStackYPercent(index),
        scale: getStackScale(index),
        rotationX: 0,
        force3D: true,
      });
    });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${window.innerHeight * Math.max(totalCards - 1, 1)}px`,
      pin: true,
      pinSpacing: true,
      // anticipatePin: 1 pre-calculates the pin position one frame early,
      // eliminating the 1-frame position jump when pinning activates.
      anticipatePin: 1,
      // invalidateOnRefresh recalculates start/end when ScrollTrigger.refresh()
      // fires (e.g. on resize or after Lenis init). Without this, the section
      // may pin at the wrong scroll position if the page height shifts.
      invalidateOnRefresh: true,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const segmentSizeFixed = totalCards > 1 ? 1 / (totalCards - 1) : 1;
        const activeIndex = Math.min(
          Math.floor(progress / segmentSizeFixed),
          totalCards - 1,
        );
        const segProgress =
          (progress - activeIndex * segmentSizeFixed) / segmentSizeFixed;

        cards.forEach((card, index) => {
          if (index < activeIndex) {
            gsap.set(card, { yPercent: -250, rotationX: 35, scale: 1 });
          } else if (index === activeIndex) {
            if (index === totalCards - 1) {
              gsap.set(card, { yPercent: -50, rotationX: 0, scale: 1 });
            } else {
              gsap.set(card, {
                yPercent: gsap.utils.interpolate(-50, -200, segProgress),
                rotationX: gsap.utils.interpolate(0, 35, segProgress),
                scale: 1,
              });
            }
          } else {
            const effectiveBehind = index - activeIndex - segProgress;
            gsap.set(card, {
              yPercent: getStackYPercent(effectiveBehind),
              rotationX: 0,
              scale: getStackScale(effectiveBehind),
            });
          }
        });
      },
    });

    return () => trigger.kill();
  }, [projectCards.length]);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative w-full h-svh overflow-hidden"
      style={{ perspective: "850px", transformStyle: "preserve-3d" }}
    >
      <p className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 text-[10px] md:text-3xl sm:text-sm tracking-[0.25em] text-white/50 uppercase z-30 whitespace-nowrap pointer-events-none select-none">
        Client Portfolio
      </p>

      {projectCards.map((project, index) => {
        const mobileTags = project.tech.slice(0, MOBILE_TAG_LIMIT);
        const mobileExtra = project.tech.length - MOBILE_TAG_LIMIT;

        return (
          <div
            key={project.id}
            id={project.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            style={{
              backgroundColor: project.color,
              zIndex: project.zIndex,
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              willChange: "transform",
            }}
            className="
              absolute top-1/2 left-1/2 origin-bottom overflow-hidden rounded-2xl text-white
              w-[80%] h-[65%]
              max-[1000px]:w-[calc(100%-1.5rem)]
              sm:max-[1000px]:w-[calc(100%-2.5rem)]
              max-[1000px]:h-[84%]
            "
          >
            {/* Mobile layout (<1000px) */}
            <div className="min-[1000px]:hidden flex flex-col h-full">
              <div
                className="relative w-full shrink-0"
                style={{ height: "50%" }}
              >
                <LazyImage
                  src={project.image}
                  alt={project.imageAlt}
                  width={900}
                  height={600}
                  className="object-cover"
                  sizes="100vw"
                  priority={index === 0}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                  }}
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-14 pointer-events-none"
                  style={{
                    background: `linear-gradient(to top, ${project.color} 10%, transparent 100%)`,
                  }}
                />
              </div>

              <div className="flex flex-col flex-1 min-h-0 px-4 pt-2 pb-4 sm:px-5 sm:pb-5">
                <p className="shrink-0 text-[9px] sm:text-[10px] tracking-[0.22em] uppercase opacity-50 mb-1">
                  {project.tag}
                </p>
                <h2
                  className="shrink-0 font-display font-bold uppercase leading-[1.1] mb-2"
                  style={{
                    fontSize: "clamp(1.05rem, 5.2vw, 1.55rem)",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.title}
                </h2>
                <p
                  className="shrink-0 text-[10px] sm:text-[11px] text-white/70 leading-relaxed mb-3"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {project.description}
                </p>
                <div className="mt-auto shrink-0 flex flex-wrap gap-1.5">
                  {mobileTags.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.75 text-[8.5px] sm:text-[9px] tracking-wide uppercase rounded-full bg-white/10 border border-white/20 whitespace-nowrap"
                    >
                      {item}
                    </span>
                  ))}
                  {mobileExtra > 0 && (
                    <span className="px-2 py-0.75 text-[8.5px] sm:text-[9px] tracking-wide uppercase rounded-full bg-white/20 border border-white/30 whitespace-nowrap">
                      +{mobileExtra}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop layout (>=1000px) */}
            <div className="hidden min-[1000px]:flex h-full items-center gap-4 p-10">
              <div className="flex-1 h-full flex flex-col p-2">
                <p className="text-xs tracking-[0.2em] uppercase opacity-60">
                  {project.tag}
                </p>
                <h1 className="mt-4 font-display text-3xl md:text-5xl leading-none uppercase">
                  {project.title}
                </h1>
                <p className="mt-4 text-sm md:text-base text-white/85 leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-xs tracking-wide uppercase rounded-full bg-white/10 border border-white/20"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative flex-1 h-full rounded-xl overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.imageAlt}
                  width={900}
                  height={600}
                  className="object-cover"
                  sizes="50vw"
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: 0,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PortfolioSection;
