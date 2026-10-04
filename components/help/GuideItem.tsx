import React from "react";

export function GuideItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-2 py-2.5">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">{title}</p>

        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
