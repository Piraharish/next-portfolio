"use client";

import { IconArrowUp } from "@tabler/icons-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Button } from "./button";

export function ScrollToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;

    if (!button) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.set(button, {
      y: 20,
      opacity: 0,
      scale: 0.9,
      pointerEvents: "none",
    });

    const show = () => {
      gsap.to(button, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: prefersReducedMotion ? 0 : 0.35,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    };

    const hide = () => {
      gsap.to(button, {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: prefersReducedMotion ? 0 : 0.25,
        ease: "power2.in",
        pointerEvents: "none",
      });
    };

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        show();
      } else {
        hide();
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <Button
      ref={buttonRef}
      type="button"
      aria-label="Scroll to top"
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className="fixed right-4 bottom-14 z-50 rounded-full"
    >
      <IconArrowUp size={18} stroke={1.7} />
    </Button>
  );
}
