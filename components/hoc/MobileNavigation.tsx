"use client";

import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

import { Button } from "../ui/button";
import ModeToggle from "../ui/mode-toggle";
import { Sheet, SheetContent, SheetTitle } from "../ui/sheet";
import { SmoothScrollLink } from "../ui/smooth-scroll-link";

type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

type MobileNavigationProps = {
  items: NavigationItem[];
  open: boolean;
  onClose: () => void;
};

export function MobileNavigation({
  items,
  open,
  onClose,
}: MobileNavigationProps) {
  return (
    <Sheet
      open={open}
      onOpenChange={(value) => {
        if (!value) {
          onClose();
        }
      }}
    >
      <SheetContent
        side="top"
        className="h-svh! w-full max-w-none gap-0 rounded-none border-0 bg-background p-0"
      >
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>

        <MobileNavigationContent items={items} onClose={onClose} />
      </SheetContent>
    </Sheet>
  );
}

type MobileNavigationContentProps = {
  items: NavigationItem[];
  onClose: () => void;
};

function MobileNavigationContent({
  items,
  onClose,
}: MobileNavigationContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const navLinks = content.querySelectorAll<HTMLElement>(".mobile-nav-link");

    const footerItems = content.querySelectorAll<HTMLElement>(
      ".mobile-footer-item",
    );

    const animatedItems = [...navLinks, ...footerItems];

    const context = gsap.context(() => {
      if (prefersReducedMotion) {
        gsap.set(animatedItems, {
          y: 0,
          opacity: 1,
        });

        return;
      }

      // Initial state
      gsap.set(animatedItems, {
        y: 24,
        opacity: 0,
      });

      const timeline = gsap.timeline({
        delay: 0.12,
      });

      timeline
        .to(navLinks, {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.07,
          ease: "power3.out",
        })
        .to(
          footerItems,
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.06,
            ease: "power3.out",
          },
          "-=0.25",
        );
    }, content);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <>
      {/* Top spacing for navbar */}
      <div className="h-20 shrink-0" />

      <div ref={contentRef} className="flex flex-1 flex-col px-6 pb-6 pt-8">
        {/* Navigation */}

        <nav aria-label="Mobile navigation" className="flex flex-col">
          {items.map((item, index) => (
            <SmoothScrollLink
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="mobile-nav-link group flex items-center justify-between border-b border-border py-5"
            >
              <div className="flex items-baseline gap-5">
                <span className="text-xs font-medium tracking-widest text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-4xl font-medium tracking-tight text-foreground">
                  {item.label}
                </span>
              </div>

              <IconArrowUpRight
                size={22}
                stroke={1.4}
                className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground"
              />
            </SmoothScrollLink>
          ))}
        </nav>

        {/* Footer */}

        <div className="mt-auto">
          <div className="flex items-center justify-between border-t border-border pt-5">
            <div>
              <p className="mobile-footer-item text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Currently
              </p>

              <p className="mobile-footer-item mt-2 text-sm text-foreground">
                Exploring performance optimizations.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="mobile-footer-item">
                <ModeToggle />
              </div>

              <div className="mobile-footer-item">
                <Button asChild size="sm">
                  <a href="/Piraharish-CV.pdf" download onClick={onClose}>
                    CV
                    <IconDownload size={15} stroke={1.7} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
            <span className="mobile-footer-item">Chennai, India</span>

            <span className="mobile-footer-item">
              © {new Date().getFullYear()} Piraharish
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
