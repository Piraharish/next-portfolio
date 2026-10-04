import { Metadata } from "next";
import type { ReactNode } from "react";

type ArchiveLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Experiments, learning projects, and things I built along the way.",
};

export default function ArchiveLayout({ children }: ArchiveLayoutProps) {
  return <main className="min-h-svh bg-background">{children}</main>;
}
