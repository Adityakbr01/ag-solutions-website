import {
  useCallback,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { portfolioItems } from "../data/homeContent";
import { HomeIcon } from "./HomeIcon";

const wrapIndex = (index: number, length: number) =>
  ((index % length) + length) % length;

const getShortestOffset = (
  index: number,
  activeIndex: number,
  length: number,
) => {
  let offset = index - activeIndex;

  if (offset > length / 2) {
    offset -= length;
  }

  if (offset < -length / 2) {
    offset += length;
  }

  return offset;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const getResponsiveTranslateX = (offset: number) => {
  if (offset === 0) {
    return "0px";
  }

  const compact = offset * 82;
  const preferred = offset * 10.6;
  const wide = offset * 158;

  return offset > 0
    ? `clamp(${compact}px, ${preferred}vw, ${wide}px)`
    : `clamp(${wide}px, ${preferred}vw, ${compact}px)`;
};

export function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [dragX, setDragX] = useState(0);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
  } | null>(null);
  const suppressClickRef = useRef(false);

  const dragProgress = clamp(dragX / 210, -0.9, 0.9);

  const moveTo = useCallback((index: number) => {
    setActiveIndex(wrapIndex(index, portfolioItems.length));
  }, []);

  const moveBy = useCallback(
    (amount: number) => {
      moveTo(activeIndex + amount);
    },
    [activeIndex, moveTo],
  );

  const cardStyles = useMemo(
    () =>
      portfolioItems.map((item, index) => {
        const offset =
          getShortestOffset(index, activeIndex, portfolioItems.length) +
          dragProgress;
        const absOffset = Math.abs(offset);
        const side = offset === 0 ? 0 : Math.sign(offset);
        const rotateY = side * -clamp(14 + absOffset * 15.5, 0, 72);
        const translateX = getResponsiveTranslateX(offset);
        const translateY = Math.max(0, 18 - absOffset * 4);
        const translateZ = -92 + absOffset * 38;
        const scale = clamp(0.82 + absOffset * 0.075, 0.82, 1.15);
        const opacity = clamp(1 - Math.max(0, absOffset - 2.4) * 0.24, 0.42, 1);
        const blur = absOffset > 3.15 ? 2.5 : 0;

        return {
          item,
          offset,
          style: {
            "--card-accent": item.accent,
            "--float-delay": `${index * -0.45}s`,
            filter: `blur(${blur}px) saturate(${clamp(1 - absOffset * 0.04, 0.84, 1)})`,
            opacity,
            transform: `translateX(-50%) translate3d(${translateX}, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
            transition: dragRef.current
              ? "none"
              : "transform 680ms cubic-bezier(0.16, 1, 0.3, 1), opacity 460ms ease, filter 460ms ease",
            zIndex: Math.round(100 + absOffset * 8),
          } as CSSProperties,
        };
      }),
    [activeIndex, dragProgress],
  );

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
    };
    suppressClickRef.current = false;
    setDragX(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    setDragX(clamp(event.clientX - dragRef.current.startX, -190, 190));
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current || dragRef.current.pointerId !== event.pointerId) {
      return;
    }

    const distance = event.clientX - dragRef.current.startX;
    dragRef.current = null;
    suppressClickRef.current = Math.abs(distance) > 18;
    setDragX(0);

    if (Math.abs(distance) > 54) {
      moveBy(distance > 0 ? -1 : 1);
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    window.setTimeout(() => {
      suppressClickRef.current = false;
    }, 0);
  };

  return (
    <section
      id="portfolio"
      className="overflow-hidden bg-slate-100 dark:bg-slate-950"
    >
      <div className="relative overflow-hidden w-full border border-slate-200 bg-white px-4 py-16 shadow-[0_30px_80px_rgba(15,23,42,0.08)] dark:border-white/[0.08] dark:bg-slate-900 sm:px-8 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.08),transparent_34%)] dark:bg-[radial-gradient(circle_at_50%_18%,rgba(249,115,22,0.14),transparent_36%)]"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="relative z-10 text-sm font-semibold text-[#f97316]">
            Our Work
          </p>
          <h2 className="relative z-10 mt-3 font-display text-3xl font-extrabold leading-[1.05] text-slate-950 sm:text-4xl md:text-5xl dark:text-white">
            Recent
            <span className="block">Projects</span>
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-[11px] leading-5 text-slate-500 sm:text-xs dark:text-slate-400">
            Explore websites, apps, campaigns, and custom systems shaped around
            real business outcomes.
          </p>
          <a
            className="relative z-10 mt-5 inline-flex min-h-9 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-[11px] font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-[#f97316]/40 hover:shadow-lg dark:border-white/[0.1] dark:bg-white/[0.06] dark:text-white dark:hover:border-[#f97316]/50"
            href="#contact"
          >
            See More Projects
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#f97316] text-white">
              <HomeIcon name="arrowRight" className="h-3 w-3" />
            </span>
          </a>
        </div>

        <div
          aria-label="Reference style 3D project showcase"
          className="reference-cover-flow relative z-10 mx-auto mt-10 h-[230px] select-none sm:h-[300px] md:mt-12 md:h-[340px]"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          role="region"
        >
          <div
            className="pointer-events-none absolute inset-y-0 left-[-36px] z-[140] w-16 bg-gradient-to-r from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-[-36px] z-[140] w-16 bg-gradient-to-l from-white via-white to-transparent dark:from-slate-900 dark:via-slate-900"
            aria-hidden="true"
          />

          <div className="reference-cover-flow-stage absolute inset-0">
            {cardStyles.map(({ item, style }, index) => (
              <article
                className="reference-cover-card absolute left-1/2 top-2 h-[170px] w-[118px] cursor-grab overflow-hidden rounded-lg bg-slate-100 shadow-[0_18px_44px_rgba(15,23,42,0.16)] will-change-transform active:cursor-grabbing dark:bg-slate-800 dark:shadow-[0_22px_56px_rgba(0,0,0,0.5)] sm:h-[220px] sm:w-[150px] md:h-[250px] md:w-[172px]"
                key={item.title}
                onClick={() => {
                  if (!suppressClickRef.current) {
                    moveTo(index);
                  }
                }}
                style={style}
              >
                <div
                  className="absolute inset-0 bg-[linear-gradient(145deg,color-mix(in_srgb,var(--card-accent)_18%,white),white_58%)] dark:bg-[linear-gradient(145deg,color-mix(in_srgb,var(--card-accent)_24%,rgb(15_23_42)),rgb(15_23_42)_58%)]"
                  aria-hidden="true"
                />
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  width="240"
                  height="320"
                  loading={index === activeIndex ? "eager" : "lazy"}
                  decoding="async"
                  className="reference-cover-image relative z-10 h-full w-full object-contain p-4 drop-shadow-2xl sm:p-5"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
