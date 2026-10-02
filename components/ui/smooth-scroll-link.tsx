"use client";

import { scrollToSection } from "@/hooks/useSmoothScroll";
import Link from "next/link";

type SmoothScrollLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export function SmoothScrollLink({
  href,
  children,
  className,
}: SmoothScrollLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();

    scrollToSection(href);

    window.history.pushState(null, "", href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
