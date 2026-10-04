"use client";

import type { ArchiveItem as ArchiveItemType } from "@/types/archive";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

type ArchiveItemProps = {
  item: ArchiveItemType;
};

export function ArchiveItem({ item }: ArchiveItemProps) {
  const Icon = item.icon;

  const content = (
    <article className="group relative grid gap-6 border-b border-border py-8 transition-colors duration-300 hover:bg-muted/30 sm:grid-cols-[80px_1fr_auto] sm:items-center sm:gap-8">
      {/* Number */}
      <div className="hidden text-sm font-medium text-muted-foreground sm:block">
        {item.number}
      </div>

      {/* Main */}
      <div className="min-w-0">
        <div className="flex items-start gap-4">
          <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
            <Icon size={18} stroke={1.5} />
          </div>

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                {item.title}
              </h2>

              <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {item.type}
              </span>
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-xs text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Year / action */}
      <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
        <span className="text-sm text-muted-foreground">{item.year}</span>

        {item.href && (
          <span className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
            <IconArrowUpRight
              size={16}
              stroke={1.6}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        )}
      </div>
    </article>
  );

  if (!item.href) {
    return content;
  }

  return (
    <Link href={item.href} className="block">
      {content}
    </Link>
  );
}
