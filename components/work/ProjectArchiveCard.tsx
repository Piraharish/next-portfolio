import Link from "next/link";
import { IconArrowUpRight, IconArchive } from "@tabler/icons-react";

export function ProjectArchiveCard() {
  return (
    <article className="group flex h-full min-h-90 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-muted p-8 sm:p-10 lg:min-h-130 lg:p-12">
      <div>
        <div className="flex size-12 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
          <IconArchive size={22} stroke={1.5} />
        </div>

        <p className="mt-12 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Archive
        </p>

        <h3 className="mt-4 max-w-xl text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Smaller projects, experiments, and things built along the way.
        </h3>

        <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
          A collection of micro projects, prototypes, utilities, experiments,
          and other work that doesn't need a full case study.
        </p>
      </div>

      <Link
        href="/archive"
        className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-foreground"
      >
        Browse archive
        <IconArrowUpRight
          size={17}
          stroke={1.7}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </article>
  );
}
