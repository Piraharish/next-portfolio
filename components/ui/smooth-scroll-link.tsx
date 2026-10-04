"use client";

import { scrollToSection } from "@/hooks/useSmoothScroll";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SmoothScrollLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function SmoothScrollLink({
  href,
  children,
  className,
  onClick,
}: SmoothScrollLinkProps) {
  const pathname = usePathname();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(href, window.location.origin);

    const isHashLink = url.hash;
    const isSamePage = url.pathname === pathname;

    // Normal links or hash links pointing to another page
    if (!isHashLink || !isSamePage) {
      onClick?.(event);
      return;
    }

    // Same-page hash navigation
    event.preventDefault();

    onClick?.(event);

    scrollToSection(url.hash);

    window.history.pushState(null, "", url.hash);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
