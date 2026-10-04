import { IconLock } from "@tabler/icons-react";

const ConfidentialVisual = () => {
  return (
    <div className="relative min-h-90 overflow-hidden border-t border-border bg-muted lg:min-h-130 lg:border-t-0 lg:border-l">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex max-w-sm flex-col items-center px-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
            <IconLock size={24} stroke={1.5} />
          </div>

          <p className="mt-6 text-sm font-medium text-foreground">
            Confidential project
          </p>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Built within an organization. Details and visuals are limited to
            respect internal confidentiality.
          </p>
        </div>
      </div>

      {/* Subtle background structure */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-1/4 h-px w-1/2 bg-border" />
        <div className="absolute left-1/3 top-1/2 h-px w-1/3 bg-border" />
        <div className="absolute bottom-1/4 left-1/5 h-px w-3/5 bg-border" />

        <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
      </div>
    </div>
  );
};

export default ConfidentialVisual;
