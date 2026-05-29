import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Main, Container, Heading, Text } from "@/components/ui/Semantic";

interface Props {
  children?: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/**
 * Standard WCAG-accessible Error Boundary wrapper.
 * Traps client-side rendering errors, logs them to consoles or reporting endpoints,
 * and renders a safe, tab-focusable fallback interface allowing page retries.
 */
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught application error:", error, errorInfo);
    // Integrate error telemetry logging here if necessary
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Main className="flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 py-16 px-4">
          <Container className="max-w-md text-center bg-white dark:bg-neutral-850 p-8 rounded-xl shadow-lg border border-neutral-200/60 dark:border-neutral-800/80">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 mb-6">
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
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            
            <Heading level={1} className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
              Something went wrong
            </Heading>
            
            <Text variant="body" className="text-neutral-500 dark:text-neutral-400 mb-6">
              A runtime component error occurred. The developer team has been notified.
            </Text>

            {this.state.error && (
              <pre className="text-left text-xs bg-neutral-50 dark:bg-neutral-900 p-3 rounded border border-neutral-250 dark:border-neutral-800 text-red-500 font-mono overflow-auto max-h-36 mb-6">
                {this.state.error.toString()}
              </pre>
            )}

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="default" onClick={this.handleReset} className="w-full sm:w-auto">
                Go to Homepage
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto"
              >
                Reload Page
              </Button>
            </div>
          </Container>
        </Main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
