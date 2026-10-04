import React from "react";

export function ShortcutItem({
  title,
  keys,
}: {
  title: string;
  keys: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl px-2 py-2.5">
      <p className="text-sm text-muted-foreground">{title}</p>

      {keys}
    </div>
  );
}
