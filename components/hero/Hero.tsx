"use client";

import { heroContent, heroMeta } from "@/data/hero";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { Signature } from "./signature";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(eyebrowRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
        })
        .from(
          titleRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.3",
        )
        .from(
          descriptionRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.4",
        )
        .from(
          actionsRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        )
        .from(
          metaRef.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3",
        );
    }, hero);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-svh items-center overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <Signature />
      <div className="mx-auto w-full">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="min-w-0 max-w-4xl">
            <p
              ref={eyebrowRef}
              className="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              {heroContent.eyebrow}
            </p>

            <h1
              ref={titleRef}
              className="max-w-3xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl wrap-break-word"
            >
              {heroContent.title}
            </h1>

            <p
              ref={descriptionRef}
              className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {heroContent.description}
            </p>

            <div
              ref={actionsRef}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href={heroContent.actions.primary.href}>
                  {heroContent.actions.primary.label}
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full group"
              >
                <a
                  href={heroContent.actions.secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub />
                  {heroContent.actions.secondary.label}{" "}
                  <IconArrowUpRight
                    stroke={2}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                  />
                </a>
              </Button>
            </div>
          </div>

          <div
            ref={metaRef}
            className="hidden w-56 border-l border-border pl-6 lg:block"
          >
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {heroMeta.label}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {heroMeta.description}
            </p>

            <span className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              {heroMeta.status.label}
            </span>
          </div>

          <div className="border-t border-border pt-6 lg:hidden">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {heroMeta.label}
            </p>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground">
              {heroMeta.description}
            </p>

            <span className="mt-4 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              {heroMeta.status.label}
            </span>
          </div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          <span className="h-px w-8 bg-border" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
}
