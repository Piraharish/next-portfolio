"use client";

import { navigation } from "@/data/navigation";
import { IconPrompt } from "@tabler/icons-react";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { SmoothScrollLink } from "../ui/smooth-scroll-link";

export function Navbar() {
  const navbarRef = useRef<HTMLElement>(null);

  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  useEffect(() => {
    const navbar = navbarRef.current;

    if (!navbar) return;

    const SCROLL_THRESHOLD = 8;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;

      if (Math.abs(difference) < SCROLL_THRESHOLD) {
        return;
      }

      if (currentScrollY <= 20) {
        showNavbar();
        lastScrollY.current = currentScrollY;
        return;
      }

      if (difference > 0) {
        hideNavbar();
      } else {
        showNavbar();
      }

      lastScrollY.current = currentScrollY;
    };

    const hideNavbar = () => {
      isHidden.current = true;

      gsap.to(navbar, {
        yPercent: -120,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const showNavbar = () => {
      isHidden.current = false;

      gsap.to(navbar, {
        yPercent: 0,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      gsap.killTweensOf(navbar);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border px-4 py-3 backdrop-blur-xl">
        <Link href="/">
          {/* <Image src="/logo.png" alt="Logo" width={50} height={50} /> */}
          <h1 className="flex items-center tracking-wide font-semibold font-caveat text-xl">
            <IconPrompt stroke={2} className="text-primary" />
            Piraharish<span className="animate-caret-blink">_</span>
          </h1>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <SmoothScrollLink key={item.href} href={item.href}>
              {item.label}
            </SmoothScrollLink>
          ))}
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
