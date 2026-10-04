import type { ReactNode } from "react";

type ArchiveLayoutProps = {
  children: ReactNode;
};

export default function ArchiveLayout({ children }: ArchiveLayoutProps) {
  return <main className="min-h-svh bg-background">{children}</main>;
}
