"use client";

import { projects } from "@/data/projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { ProjectArchiveCard } from "./ProjectArchiveCard";
import { ProjectCard } from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const NAVBAR_OFFSET = 84;

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const progressRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef<HTMLSpanElement>(null);
  const totalSlides = projects.length + 1;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const stage = stageRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const progress = progressRef.current;
    const currentIndex = currentIndexRef.current;

    if (
      !section ||
      !intro ||
      !stage ||
      !viewport ||
      !track ||
      !progress ||
      !currentIndex
    ) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      /*
       * --------------------------------------------------
       * Section intro animation
       * --------------------------------------------------
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
       * --------------------------------------------------
       * Reduced motion
       * --------------------------------------------------
       */

      if (prefersReducedMotion) {
        gsap.set(track, {
          x: 0,
        });

        gsap.set(progress, {
          scaleX: 1,
        });

        currentIndex.textContent = String(totalSlides).padStart(2, "0");

        return;
      }

      /*
       * --------------------------------------------------
       * Vertical scroll -> horizontal project movement
       * --------------------------------------------------
       *
       * The user scrolls vertically.
       *
       * The Works stage becomes pinned and the project
       * track moves horizontally based on ScrollTrigger
       * progress.
       *
       * This behaviour is used on both desktop and mobile.
       */

      const getScrollAmount = () =>
        Math.max(0, track.scrollWidth - viewport.clientWidth);

      const isMobile = window.innerWidth < 1024;

      gsap.set(track, {
        x: 0,
      });

      gsap.set(progress, {
        scaleX: 0,
      });

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",

        scrollTrigger: {
          trigger: stage,

          /*
           * Keep the pinned stage below the floating navbar.
           */
          start: `top ${NAVBAR_OFFSET}px`,

          /*
           * The amount of vertical scrolling required is
           * proportional to the horizontal distance.
           */
          end: () => `+=${getScrollAmount()}`,

          pin: true,
          pinSpacing: true,

          /*
           * Slightly tighter on mobile so the cards feel
           * more responsive to the user's vertical scroll.
           */
          scrub: isMobile ? 0.6 : 1,

          invalidateOnRefresh: true,
          anticipatePin: 1,

          onUpdate: (self) => {
            const progressValue = self.progress;

            /*
             * Update progress bar.
             */
            gsap.set(progress, {
              scaleX: progressValue,
            });

            /*
             * Update current project number.
             */
            const index = Math.min(
              totalSlides - 1,
              Math.floor(progressValue * totalSlides),
            );

            currentIndex.textContent = String(index + 1).padStart(2, "0");
          },
        },
      });

      /*
       * --------------------------------------------------
       * Refresh after images/content have settled
       * --------------------------------------------------
       */

      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => {
        window.clearTimeout(refreshTimer);
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
      {/* --------------------------------------------------
          Section intro
      -------------------------------------------------- */}

      <div
        ref={introRef}
        className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
      >
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-foreground/30" />

          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            My Works
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
          <h2 className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            My works built around
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

      {/* --------------------------------------------------
          Horizontal project stage
      -------------------------------------------------- */}

      <div ref={stageRef} className="relative mt-16 w-full sm:mt-20 lg:mt-28">
        {/* Project viewport */}

        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max min-w-max gap-4 px-4 sm:gap-6 sm:px-6 md:px-8 lg:gap-8 lg:px-0"
          >
            {projects.map((project) => (
              <div
                key={project.number}
                className="w-[86vw] min-w-[86vw] shrink-0 sm:w-[78vw] sm:min-w-[78vw] lg:w-[72vw] lg:min-w-[72vw] xl:w-[68vw] xl:min-w-[68vw]"
              >
                <ProjectCard project={project} />
              </div>
            ))}

            {/* Archive */}

            <div className="w-[86vw] min-w-[86vw] shrink-0 sm:w-[78vw] sm:min-w-[78vw] lg:w-[72vw] lg:min-w-[72vw] xl:w-[68vw] xl:min-w-[68vw]">
              <ProjectArchiveCard />
            </div>
          </div>
        </div>

        {/* --------------------------------------------------
            Project progress
        -------------------------------------------------- */}

        <div className="mx-auto mt-6 flex w-full max-w-7xl items-center gap-4 px-4 sm:mt-8 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <span
            ref={currentIndexRef}
            className="w-5 shrink-0 text-xs font-medium tracking-widest text-muted-foreground"
          >
            01
          </span>

          <div className="relative h-px flex-1 overflow-hidden bg-border">
            <div
              ref={progressRef}
              className="absolute inset-y-0 left-0 w-full origin-left bg-foreground"
            />
          </div>

          <span className="w-5 shrink-0 text-right text-xs font-medium tracking-widest text-muted-foreground">
            {String(totalSlides).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
