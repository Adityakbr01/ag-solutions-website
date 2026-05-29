import { useEffect } from "react";
import type Lenis from "lenis";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const win = window as Window & {
      requestIdleCallback?: (
        callback: () => void,
        options?: { timeout: number }
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let cancelled = false;
    let frameId = 0;
    let idleId: number | undefined;
    let timeoutId: number | undefined;
    let lenis: Lenis | undefined;

    const startLenis = async () => {
      const { default: LenisConstructor } = await import("lenis");

      if (cancelled) {
        return;
      }

      lenis = new LenisConstructor({
        anchors: true,
      });
      window.__lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        frameId = window.requestAnimationFrame(raf);
      };

      frameId = window.requestAnimationFrame(raf);
    };

    if (win.requestIdleCallback) {
      idleId = win.requestIdleCallback(startLenis, { timeout: 1500 });
    } else {
      timeoutId = window.setTimeout(startLenis, 800);
    }

    return () => {
      cancelled = true;

      if (idleId !== undefined) {
        win.cancelIdleCallback?.(idleId);
      }

      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }

      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      lenis?.destroy();

      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, []);

  return null;
}

export default SmoothScroll;
