"use client";

import { IconArrowDown, IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { archiveItems } from "@/data/archive";
import { ArchiveItem } from "@/components/archive/ArchiveItem";

export default function ArchivePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40 lg:px-8">
      {/* Header */}
      <header className="border-b border-border pb-10">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Archive
            </p>

            <h1 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-0.04em] text-foreground sm:text-6xl lg:text-8xl">
              Things I built
              <br />
              <span className="text-muted-foreground/40">along the way.</span>
            </h1>
          </div>

          <div className="hidden shrink-0 sm:block">
            <div className="flex size-14 items-center justify-center rounded-full border border-border text-muted-foreground">
              <IconArrowDown size={20} stroke={1.5} />
            </div>
          </div>
        </div>

        <div className="mt-10 flex max-w-2xl items-start gap-4">
          <span className="mt-2 h-px w-10 shrink-0 bg-foreground/30" />

          <p className="text-sm leading-7 text-muted-foreground sm:text-base">
            Not everything I build needs to become a product. Some are
            experiments, some are learning projects, and some exist simply
            because I wanted to understand how something works.
          </p>
        </div>
      </header>

      {/* Archive list */}
      <section className="mt-16 sm:mt-20">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {archiveItems.length} entries
          </span>

          <span className="text-xs text-muted-foreground">
            Experiments &amp; learning
          </span>
        </div>

        <div>
          {archiveItems.map((item) => (
            <ArchiveItem key={`${item.year}-${item.number}`} item={item} />
          ))}
        </div>
      </section>

      {/* Back */}
      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          Back to selected work
          <IconArrowUpRight
            size={16}
            stroke={1.7}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </div>
  );
}
