"use client";

import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenisInstance: any = null;

    async function init() {
      const Lenis = (await import("lenis")).default;

      lenisInstance = new Lenis({
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }

    init();

    return () => {
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return null;
}
