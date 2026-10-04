import Link from "next/link";
import { IconArrowUpRight, IconLock } from "@tabler/icons-react";

import type { Project } from "@/types/projects";
import ConfidentialVisual from "./ConfidentialVisual";
import ProjectVisual from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  const isConfidential = project.type === "confidential";

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        {/* Content */}
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-widest text-muted-foreground">
                {project.number}
              </span>

              <div className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
                {isConfidential ? (
                  <IconLock size={18} stroke={1.5} />
                ) : (
                  <Icon size={20} stroke={1.5} />
                )}
              </div>
            </div>

            <p className="mt-12 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {project.category}
            </p>

            <h3 className="mt-4 text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
              {project.description}
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {technology}
                </span>
              ))}
            </div>

            {project.href && (
              <Link
                href={project.href}
                className="group/link mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
              >
                {isConfidential ? "View overview" : "Explore project"}

                <IconArrowUpRight
                  size={16}
                  stroke={1.8}
                  className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </Link>
            )}
          </div>
        </div>

        {/* Visual */}
        {isConfidential ? (
          <ConfidentialVisual />
        ) : (
          <ProjectVisual project={project} />
        )}
      </div>
    </article>
  );
}
