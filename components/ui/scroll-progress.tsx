"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;

      const value =
        scrollableHeight > 0
          ? Math.min(window.scrollY / scrollableHeight, 1)
          : 0;

      setProgress(value);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-9999 h-1">
      <div
        className="h-full origin-left bg-primary transition-transform duration-300 ease-out"
        style={{
          transform: `scaleX(${progress})`,
        }}
      />
    </div>
  );
}
