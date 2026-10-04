import type { ExperienceItem as ExperienceItemType } from "@/types/experience";

type ExperienceItemProps = {
  item: ExperienceItemType;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  const Icon = item.icon;
  return (
    <article className="experience-item group relative grid grid-cols-[32px_1fr] gap-6 pb-16 sm:grid-cols-[128px_32px_1fr] sm:gap-4 sm:pb-24 lg:grid-cols-[144px_32px_1fr] lg:gap-8">
      {/* Period */}
      <div className="hidden pt-1 text-right sm:block">
        <span className="text-sm font-medium text-muted-foreground">
          {item.period}
        </span>
      </div>

      {/* Timeline node */}
      <div className="relative flex justify-center">
        <div className="relative z-10 mt-0.5 flex size-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-500 group-hover:border-primary group-hover:text-primary">
          <Icon size={16} stroke={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0">
        {/* Mobile period */}
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground sm:hidden">
          {item.period}
        </span>

        <div className="mt-3 sm:mt-0">
          <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {item.role}
          </h3>

          <p className="mt-1 text-sm font-medium text-muted-foreground">
            {item.company}
          </p>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          {item.description}
        </p>

        <ul className="mt-7 max-w-2xl space-y-3">
          {item.responsibilities.map((responsibility) => (
            <li
              key={responsibility}
              className="flex gap-3 text-sm leading-6 text-muted-foreground"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/40 transition-colors duration-300 group-hover:bg-primary/60" />

              <span>{responsibility}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 group-hover:border-foreground/20 group-hover:text-foreground"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
