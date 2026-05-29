/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import type { RouteObject } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import LoadingFallback from "@/components/common/LoadingFallback";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Lazy load route pages directly to allow precise bundler code splitting and tree shaking
const HomePage = React.lazy(() => import("@/modules/home/pages/HomePage"));
const AboutPage = React.lazy(() => import("@/modules/about/pages/AboutPage"));
const NotFound = React.lazy(() => import("@/components/common/NotFound"));

/**
 * Custom metadata interface for sitemap generation and SEO auditing
 */
export interface SitemapRouteMeta {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number; // 0.0 to 1.0
}

/**
 * Sitemap-ready route list for static export or dynamic generation of sitemaps
 */
export const sitemapRoutes: SitemapRouteMeta[] = [
  { path: "/", changefreq: "daily", priority: 1.0 },
  { path: "/about", changefreq: "monthly", priority: 0.8 },
];

/**
 * Helper to wrap component in Suspense and ErrorBoundary for resilient code splitting
 */
const lazyRoute = (Component: React.ComponentType) => (
  <ErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  </ErrorBoundary>
);

/**
 * Centralized Route Configuration mapping paths to layout shells and lazy pages
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: lazyRoute(HomePage),
      },
      {
        path: "about",
        element: lazyRoute(AboutPage),
      },
      {
        path: "*",
        element: lazyRoute(NotFound),
      },
    ],
  },
];

export default routes;
