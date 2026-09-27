import { Capability } from "@/types/capabilities";

type CapabilityCardProps = {
  capability: Capability;
};

export function CapabilityCard({ capability }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <article className="group border-t border-border py-8 transition-colors duration-300 hover:border-primary lg:py-10">
      <div className="grid gap-6 sm:grid-cols-[64px_1fr] lg:grid-cols-[64px_minmax(0,1fr)_auto] lg:gap-8">
        <div className="flex items-start">
          <span className="text-xs font-medium tracking-widest text-muted-foreground">
            {capability.number}
          </span>
        </div>

        <div>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-foreground/20 group-hover:text-foreground">
              <Icon size={20} stroke={1.5} />
            </div>

            <h3 className="text-2xl font-medium tracking-tight text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
              {capability.title}
            </h3>
          </div>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            {capability.description}
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-2 lg:max-w-48 lg:justify-end">
          {capability.technologies.map((technology) => (
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
