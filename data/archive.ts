import { ArchiveItem } from "@/types/archive";
import {
  IconBrandReact,
  IconDatabase,
  IconNetwork,
  IconPalette,
} from "@tabler/icons-react";

export const archiveItems: ArchiveItem[] = [
  {
    year: "2026",
    number: "01",
    title: "Redis Caching Lab",
    description:
      "A small experiment exploring caching strategies, invalidation, and how Redis fits into an API-backed application.",
    technologies: ["Redis", "ASP.NET Core", "SQL Server"],
    icon: IconDatabase,
    type: "learning",
  },
  {
    year: "2026",
    number: "02",
    title: "WebSocket Experiments",
    description:
      "Exploring real-time communication between a React client and ASP.NET Core backend.",
    technologies: ["WebSocket", "React", "C#"],
    icon: IconNetwork,
    type: "experiment",
  },
  {
    year: "2026",
    number: "03",
    title: "Portfolio v2",
    description:
      "A complete rebuild of my personal portfolio focused on better structure, interaction, performance, and visual storytelling.",
    technologies: ["Next.js", "GSAP", "Tailwind CSS"],
    icon: IconPalette,
    type: "side-project",
  },
  {
    year: "2025",
    number: "04",
    title: "React State Experiments",
    description:
      "Small experiments around client state, server state, caching, and predictable data flows in React applications.",
    technologies: ["React", "TanStack Query", "Zustand"],
    icon: IconBrandReact,
    type: "learning",
  },
];
