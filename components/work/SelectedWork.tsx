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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const projectsContainer = projectsRef.current;

    if (!section || !intro || !projectsContainer) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
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

      gsap.from(projectsContainer.children, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsContainer,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          ref={introRef}
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Selected Work
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Software built around real problems, not just pretty screens.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">
              A selection of applications where product requirements, technical
              constraints, and everyday users shaped the engineering decisions.
            </p>
          </div>
        </div>

        <div ref={projectsRef} className="mt-16 space-y-8 sm:mt-20 lg:mt-28">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
