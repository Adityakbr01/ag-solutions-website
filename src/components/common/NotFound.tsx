import React from "react";
import { Link } from "react-router-dom";
import { Main, Container, Heading, Text } from "@/components/ui/Semantic";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/seo/SEO";

/**
 * Highly styled, accessible Page Not Found (404) screen.
 */
export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="The requested page could not be found."
        robots="noindex, nofollow" // Avoid search engines indexing 404 pages
      />
      
      <Main className="flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-20 px-4">
        <Container className="max-w-md text-center bg-white dark:bg-neutral-850 p-8 rounded-xl shadow-lg border border-neutral-200/60 dark:border-neutral-800/80">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mb-6">
            <svg
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <Heading level={1} className="text-3xl font-extrabold text-neutral-900 dark:text-white mb-2">
            404
          </Heading>
          
          <Heading level={2} className="text-xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
            Page Not Found
          </Heading>

          <Text variant="body" className="text-neutral-500 dark:text-neutral-400 mb-6">
            We can't find the page you're looking for. It may have been moved or deleted.
          </Text>

          <div className="flex justify-center">
            <Link to="/" className="w-full sm:w-auto focus:outline-none">
              <Button variant="default" className="w-full sm:w-auto">
                Back to Homepage
              </Button>
            </Link>
          </div>
        </Container>
      </Main>
    </>
  );
};

export default NotFound;
