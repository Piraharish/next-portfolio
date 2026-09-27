"use client";

import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export function Signature() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const underlineRef = useRef<SVGPathElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const name = nameRef.current;
    const underline = underlineRef.current;

    if (!container || !name || !underline) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      const underlineLength = underline.getTotalLength();

      gsap.set(name, {
        y: 20,
        opacity: 0,
      });

      gsap.set(underline, {
        strokeDasharray: underlineLength,
        strokeDashoffset: underlineLength,
      });

      if (prefersReducedMotion) {
        gsap.set(name, {
          y: 0,
          opacity: 1,
        });

        gsap.set(underline, {
          strokeDashoffset: 0,
        });

        return;
      }

      const timeline = gsap.timeline({
        delay: 1.9,
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .to(name, {
          y: 0,
          opacity: 1,
          duration: 0.6,
        })
        .to(
          underline,
          {
            strokeDashoffset: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.1",
        );
    }, container);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute left-[75%] top-[38%] hidden -translate-x-1/2 -rotate-16 select-none lg:block"
    >
      <span
        ref={nameRef}
        className="block text-7xl font-semibold tracking-wide leading-none font-caveat"
      >
        Piraharish
      </span>

      <svg
        viewBox="0 0 420 35"
        className="-mt-2 h-auto w-72 overflow-visible text-primary/80 xl:w-80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={underlineRef}
          d="M20 14 C110 25 250 25 400 10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
      </svg>
    </div>
  );
}
