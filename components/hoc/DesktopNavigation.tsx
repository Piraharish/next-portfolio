import { IconArrowUpRight, IconDownload } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { SmoothScrollLink } from "../ui/smooth-scroll-link";
import ModeToggle from "../ui/mode-toggle";

type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
};

type DesktopNavigationProps = {
  items: NavigationItem[];
};

export function DesktopNavigation({ items }: DesktopNavigationProps) {
  return (
    <div className="hidden items-center gap-1 md:flex">
      <div className="flex items-center gap-1">
        {items.map((item) => (
          <SmoothScrollLink
            key={item.href}
            href={item.href}
            className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-foreground"
          >
            {item.label}
          </SmoothScrollLink>
        ))}
      </div>

      <div className="mx-2 h-5 w-px bg-border" />

      <ModeToggle />

      <div className="mx-2 h-5 w-px bg-border" />

      <Button asChild size="sm">
        <a href="/Piraharish-CV.pdf" download>
          <span>CV</span>

          <IconDownload
            size={14}
            stroke={1.7}
            className="transition-transform duration-300 group-hover/button:translate-y-0.5"
          />
        </a>
      </Button>
    </div>
  );
}
