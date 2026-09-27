import { Project } from "@/types/projects";
import { IconArrowUpRight } from "@tabler/icons-react";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;

  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-card">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-widest text-muted-foreground">
                {project.number}
              </span>

              <div className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-foreground/30 group-hover:text-foreground">
                <Icon size={20} stroke={1.5} />
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

            <button
              type="button"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Explore project
              <IconArrowUpRight
                size={16}
                stroke={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>

        <div className="relative min-h-90 overflow-hidden border-t border-border bg-muted lg:min-h-130 lg:border-t-0 lg:border-l">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative aspect-16/10 w-full max-w-2xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
              <div className="flex h-10 items-center gap-2 border-b border-border px-4">
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="size-2 rounded-full bg-muted-foreground/30" />
              </div>

              <div className="grid h-[calc(100%-2.5rem)] grid-cols-[100px_1fr]">
                <div className="border-r border-border p-3">
                  <div className="h-2 w-12 rounded bg-muted" />
                  <div className="mt-5 space-y-3">
                    <div className="h-2 w-14 rounded bg-muted" />
                    <div className="h-2 w-10 rounded bg-muted" />
                    <div className="h-2 w-12 rounded bg-muted" />
                  </div>
                </div>

                <div className="p-5">
                  <div className="h-3 w-28 rounded bg-muted" />

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-lg border border-border bg-muted/40" />
                    <div className="h-20 rounded-lg border border-border bg-muted/40" />
                    <div className="h-20 rounded-lg border border-border bg-muted/40" />
                  </div>

                  <div className="mt-5 h-32 rounded-lg border border-border bg-muted/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
