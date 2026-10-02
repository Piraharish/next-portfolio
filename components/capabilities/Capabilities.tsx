"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { capabilities } from "@/data/capabilities";
import { CapabilityCard } from "./CapabilityCard";

gsap.registerPlugin(ScrollTrigger);

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;

    if (!section || !heading || !cards) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.from(heading.children, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(cards.children, {
        y: 35,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cards,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="relative border-t border-border py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] lg:gap-24">
        <div ref={headingRef} className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            What I Build
          </p>

          <h2 className="mt-6 max-w-lg text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl wrap-break-word">
            Complex workflows into experiences, people love to use.
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-muted-foreground">
            I work across the product surface and the systems underneath it —
            from interaction design and frontend architecture to APIs, data, and
            real-time communication.
          </p>
        </div>

        <div ref={cardsRef} className="border-b border-border">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability.number} capability={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
