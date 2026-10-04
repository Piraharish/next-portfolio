"use client";

import { navigation } from "@/data/navigation";
import { IconMenu3, IconPrompt, IconX } from "@tabler/icons-react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

export function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    const SCROLL_THRESHOLD = 8;

    const showNavbar = () => {
      gsap.to(navbar, {
        yPercent: 0,
        duration: 0.45,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const hideNavbar = () => {
      gsap.to(navbar, {
        yPercent: -120,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handleScroll = () => {
      /*
       * Never hide the navbar while the mobile menu
       * is open.
       */
      if (mobileMenuOpen) {
        showNavbar();
        lastScrollY.current = window.scrollY;
        return;
      }

      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (Math.abs(difference) < SCROLL_THRESHOLD) {
        return;
      }

      /*
       * Always show the navbar near the top.
       */
      if (currentScrollY <= 20) {
        showNavbar();
        lastScrollY.current = currentScrollY;
        return;
      }

      /*
       * Scrolling down → hide.
       * Scrolling up → show.
       */
      if (difference > 0) {
        hideNavbar();
      } else {
        showNavbar();
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(navbar);
    };
  }, [mobileMenuOpen]);

  /*
   * Close mobile navigation when resizing to desktop.
   */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header
        ref={navbarRef}
        className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4"
      >
        <nav
          aria-label="Primary navigation"
          className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-border/80 bg-background/75 px-4 shadow-sm backdrop-blur-xl sm:px-5"
        >
          {/* Logo */}

          <Link
            href="/"
            aria-label="Piraharish home"
            className="group flex items-center"
          >
            <span className="flex items-center font-caveat text-xl font-semibold tracking-wide text-foreground">
              <IconPrompt
                size={19}
                stroke={2}
                className="mr-0.5 text-primary transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              Piraharish
              <span
                aria-hidden="true"
                className="ml-0.5 animate-caret-blink text-primary"
              >
                _
              </span>
            </span>
          </Link>

          {/* Desktop */}

          <DesktopNavigation items={navigation} />

          {/* Mobile */}

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="relative z-50 rounded-full px-3 md:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <>
                <span className="sr-only">Close menu</span>
                <IconX size={24} stroke={1.7} />
              </>
            ) : (
              <>
                <span className="sr-only">Open menu</span>
                <IconMenu3 size={24} stroke={1.7} />
              </>
            )}
          </Button>
        </nav>
      </header>

      <MobileNavigation
        items={navigation}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
