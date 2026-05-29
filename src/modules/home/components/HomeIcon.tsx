import type { ReactNode, SVGProps } from "react";

export type HomeIconName =
  | "arrowRight"
  | "chart"
  | "check"
  | "clock"
  | "fileText"
  | "globe"
  | "mail"
  | "mapPin"
  | "menu"
  | "monitor"
  | "phone"
  | "send"
  | "shoppingCart"
  | "smartphone"
  | "sparkles"
  | "trendingUp"
  | "users"
  | "x";

const iconPaths: Record<HomeIconName, ReactNode> = {
  arrowRight: (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M8 16V9" />
      <path d="M12 16V7" />
      <path d="M16 16v-4" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v5l3 2" />
    </>
  ),
  fileText: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h4" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2 2.4 3 5.4 3 9s-1 6.6-3 9" />
      <path d="M12 3c-2 2.4-3 5.4-3 9s1 6.6 3 9" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  monitor: (
    <>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M9 21h6" />
      <path d="M12 16v5" />
    </>
  ),
  phone: (
    <>
      <path d="M7 4h3l1.5 4-2 1.2a12 12 0 0 0 5.3 5.3l1.2-2 4 1.5v3a2 2 0 0 1-2 2A14 14 0 0 1 5 6a2 2 0 0 1 2-2z" />
    </>
  ),
  send: (
    <>
      <path d="m21 3-7 18-4-8-7-4z" />
      <path d="M10 13 21 3" />
    </>
  ),
  shoppingCart: (
    <>
      <path d="M5 6h2l2 9h8l2-6H8" />
      <circle cx="10" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
    </>
  ),
  smartphone: (
    <>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3 10 9l-6 3 6 3 2 6 2-6 6-3-6-3z" />
      <path d="M19 4v4" />
      <path d="M17 6h4" />
    </>
  ),
  trendingUp: (
    <>
      <path d="m4 16 5-5 4 4 7-7" />
      <path d="M14 8h6v6" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 11a3 3 0 0 0 0-6" />
      <path d="M18 20a5 5 0 0 0-3-4.5" />
    </>
  ),
  x: (
    <>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </>
  ),
};

interface HomeIconProps extends SVGProps<SVGSVGElement> {
  name: HomeIconName;
}

export function HomeIcon({ name, className = "", ...props }: HomeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
