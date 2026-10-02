"use client";

import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { ProjectCard } from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const projectsContainer = projectsRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;

    if (!section || !intro || !projectsContainer || !track || !progress) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      /*
       * Intro animation
       */
      if (!prefersReducedMotion) {
        gsap.from(intro.children, {
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
      }

      /*
       * Mobile / reduced motion
       *
       * Natural horizontal scrolling is used on smaller screens.
       * We don't pin or hijack vertical scrolling here.
       */
      if (prefersReducedMotion) {
        gsap.set(progress, {
          scaleX: 1,
        });

        return;
      }

      /*
       * Desktop horizontal scroll
       */
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const getScrollAmount = () =>
          Math.max(0, track.scrollWidth - projectsContainer.clientWidth);

        const horizontalScroll = gsap.to(track, {
          x: () => -getScrollAmount(),
          ease: "none",
          scrollTrigger: {
            trigger: projectsContainer,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        /*
         * Horizontal project progress
         *
         * scaleX represents the current position through
         * the project track.
         */
        gsap.set(progress, {
          scaleX: 0,
        });

        gsap.to(progress, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: projectsContainer,
            start: "top top",
            end: () => `+=${getScrollAmount()}`,
            scrub: true,
          },
        });

        return () => {
          horizontalScroll.kill();
        };
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Section header */}
        <div ref={introRef} className="relative">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-foreground/30" />

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
            <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
              Software built around
              <span className="text-muted-foreground"> real problems.</span>
            </h2>

            <div className="lg:pb-2">
              <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
                A selection of applications shaped by real workflows, technical
                constraints, and the people who use them every day.
              </p>
            </div>
          </div>

          <div className="mt-10 h-px w-full bg-border" />
        </div>

        {/* Projects */}
        <div
          ref={projectsRef}
          className="relative mt-16 overflow-x-auto overscroll-x-contain sm:mt-20 lg:mt-28 lg:overflow-hidden"
        >
          <div
            ref={trackRef}
            className="flex w-max gap-4 pr-[8vw] lg:gap-8 lg:pr-0"
          >
            {projects.map((project) => (
              <div
                key={project.number}
                className="w-[85vw] shrink-0 sm:w-[72vw] lg:w-[68vw] xl:w-[65vw]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {/* Project progress */}
        <div className="mt-8 flex items-center gap-4">
          <span className="shrink-0 text-xs font-medium tracking-widest text-muted-foreground">
            01
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-border">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-foreground"
            />
          </div>

          <span className="shrink-0 text-xs font-medium tracking-widest text-muted-foreground">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
