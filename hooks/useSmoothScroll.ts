"use client";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(target: string) {
  const element = document.querySelector(target);

  if (!element) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (prefersReducedMotion) {
    element.scrollIntoView();
    return;
  }

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: element,
      offsetY: 0,
    },
    ease: "power3.out",
  });
}
