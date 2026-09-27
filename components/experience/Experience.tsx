"use client";

import { experience } from "@/data/experience";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { ExperienceItem } from "./ExperienceItem";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;
    const progress = progressRef.current;

    if (!section || !timeline || !progress) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(progress, { scaleY: 1 });
        return;
      }

      gsap.from(".experience-intro > *", {
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

      gsap.from(".experience-item", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 80%",
          once: true,
        },
      });

      gsap.fromTo(
        progress,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="experience-intro relative">
          <div className="flex items-end justify-between border-b border-border pb-6">
            <span className="text-7xl font-medium tracking-tighter text-foreground/10 sm:text-8xl lg:text-9xl">
              04
            </span>

            <p className="mb-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Experience
            </p>
          </div>

          <div className="mt-10 max-w-4xl">
            <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
              Where the work
              <br />
              has taken me.
            </h2>

            <div className="mt-8 flex max-w-2xl items-start gap-4">
              <span className="mt-2 h-px w-10 shrink-0 bg-foreground/30" />

              <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                From product interfaces to backend systems, these experiences
                have shaped how I approach software, collaboration, and solving
                problems.
              </p>
            </div>
          </div>
        </div>

        <div ref={timelineRef} className="relative mt-20 lg:mt-28">
          {/* Base timeline */}
          <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-border sm:left-32 lg:left-40 rounded-2xl" />

          {/* Animated timeline progress */}
          <div
            ref={progressRef}
            className="absolute left-4 top-0 h-full w-0.5 origin-top bg-primary sm:left-32 lg:left-40 rounded-2xl"
          />

          <div>
            {experience.map((item) => (
              <ExperienceItem
                key={`${item.company}-${item.period}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
