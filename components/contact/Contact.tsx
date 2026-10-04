"use client";

import { contactContent, contactLinks } from "@/data/contact";
import { IconArrowUpRight, IconMapPin } from "@tabler/icons-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const map = mapRef.current;
    const marker = markerRef.current;

    if (!section || !content || !map || !marker) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const context = gsap.context(() => {
      if (!prefersReducedMotion) {
        /*
         * Content entrance
         */
        gsap.from(content.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        });

        /*
         * Background movement
         *
         * Very subtle — the map should feel alive,
         * not like a hero animation.
         */
        gsap.fromTo(
          map,
          {
            scale: 1.08,
            x: -20,
            y: 10,
          },
          {
            scale: 1,
            x: 0,
            y: 0,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          },
        );

        /*
         * Location marker
         */
        gsap.fromTo(
          marker,
          {
            scale: 0.7,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              once: true,
            },
          },
        );
      }
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative isolate overflow-hidden border-t border-border py-24 sm:py-32 lg:py-40"
    >
      {/* ==================================================
          MAP / SATELLITE BACKGROUND
      ================================================== */}

      <div
        ref={mapRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Main atmospheric glow */}
        <div className="absolute right-[-10%] top-[5%] h-[80%] w-[65%] rounded-full bg-primary/5 blur-[140px]" />

        <div className="absolute bottom-[-30%] left-[5%] h-[70%] w-[50%] rounded-full bg-primary/3 blur-[120px]" />

        {/* Map texture */}
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="absolute inset-[-5%] h-[110%] w-[110%] opacity-[0.11] blur-[0.5px]"
        >
          <defs>
            <filter id="map-blur">
              <feGaussianBlur stdDeviation="0.7" />
            </filter>
          </defs>

          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-foreground"
            filter="url(#map-blur)"
          >
            {/* Major roads */}

            <path d="M-100 650 C180 520 300 560 520 430 S850 160 1100 260 S1380 500 1700 360" />

            <path d="M-100 760 C180 690 330 700 560 580 S920 330 1130 400 S1450 650 1700 540" />

            <path d="M50 150 C280 220 340 330 500 370 S800 350 970 210 S1280 90 1580 180" />

            <path d="M220 -50 C300 180 410 300 390 500 S480 760 620 950" />

            <path d="M570 -50 C590 180 700 290 680 480 S740 760 850 950" />

            <path d="M980 -50 C930 160 1020 300 1110 450 S1150 720 1080 950" />

            <path d="M1280 -50 C1200 180 1260 350 1390 480 S1460 750 1400 950" />

            {/* Secondary roads */}

            <path
              d="M-100 420 C150 380 240 410 420 350 S700 180 880 220"
              opacity="0.6"
            />

            <path
              d="M300 900 C370 680 350 540 500 430 S760 330 900 400"
              opacity="0.6"
            />

            <path
              d="M760 900 C720 700 790 590 940 500 S1250 430 1500 500"
              opacity="0.6"
            />

            <path
              d="M1100 100 C1180 230 1180 330 1080 450 S900 650 920 900"
              opacity="0.6"
            />

            {/* Small road network */}

            <path d="M0 290 L240 330 L400 280 L600 320 L800 280" />

            <path d="M80 550 L250 500 L420 530 L590 470 L760 500" />

            <path d="M820 140 L900 250 L850 370 L940 470 L900 600" />

            <path d="M1120 240 L1240 310 L1200 420 L1320 500 L1280 650" />

            <path d="M1360 120 L1430 250 L1390 370 L1510 450 L1460 620" />
          </g>

          {/* Water / geographic mass */}
          <path
            d="M1080 0 C1030 130 1080 250 1040 360 C990 500 1030 610 980 760 C950 830 940 900 940 900 H1600 V0Z"
            fill="currentColor"
            className="text-foreground"
            opacity="0.025"
          />

          {/* Smaller city blocks */}
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
            className="text-foreground"
            opacity="0.45"
          >
            <path d="M100 250 L220 220 L300 260 L260 340 L140 320Z" />
            <path d="M340 180 L460 160 L520 240 L450 300 L360 270Z" />
            <path d="M540 330 L650 280 L740 340 L700 430 L580 440Z" />
            <path d="M780 180 L900 150 L950 230 L880 300 L790 280Z" />
            <path d="M1120 500 L1240 450 L1330 510 L1280 600 L1160 610Z" />
            <path d="M1360 300 L1490 270 L1550 350 L1490 430 L1380 410Z" />
          </g>
        </svg>

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[2px]" />

        {/* Edge fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,transparent_0%,var(--background)_72%)]" />
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div ref={contentRef} className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24">
          {/* Main CTA */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-foreground/30" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {contactContent.eyebrow}
              </p>
            </div>

            <h2 className="mt-8 max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
              {contactContent.title}
            </h2>

            <p className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {contactContent.description}
            </p>

            <a
              href={`mailto:${contactContent.email}`}
              className="group mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 text-lg font-medium text-foreground transition-colors duration-300 hover:border-foreground"
            >
              {contactContent.email}

              <IconArrowUpRight
                size={20}
                stroke={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Contact links */}

          <div className="lg:self-end">
            <div className="border-t border-border">
              {contactLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="group flex items-center justify-between border-b border-border py-5"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={19}
                        stroke={1.5}
                        className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground"
                      />

                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {link.label}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {link.value}
                        </p>
                      </div>
                    </div>

                    <IconArrowUpRight
                      size={17}
                      stroke={1.5}
                      className="text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </a>
                );
              })}
            </div>

            {/* Location */}

            <div className="relative mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <div
                ref={markerRef}
                className="relative flex size-7 items-center justify-center"
              >
                <span className="absolute size-7 animate-ping rounded-full bg-primary/20 animation-duration-[2.5s]" />

                <span className="relative flex size-5 items-center justify-center rounded-full border border-primary/40 bg-background/80">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
              </div>

              <span>{contactContent.location}</span>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-24 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Piraharish. All rights reserved.</p>

          <p>Designed & built with intention.</p>
        </div>
      </div>
    </section>
  );
}
