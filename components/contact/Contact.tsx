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

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const context = gsap.context(() => {
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
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-border py-24"
    >
      <div ref={contentRef} className="mx-auto w-full max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_0.6fr] lg:gap-24">
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

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <IconMapPin size={17} stroke={1.5} />

              <span>{contactContent.location}</span>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Piraharish. All rights reserved.</p>

          <p>Designed & built with intention.</p>
        </div>
      </div>
    </section>
  );
}
