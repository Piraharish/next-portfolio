import { Capability } from "@/types/capabilities";
import {
  IconActivity,
  IconComponents,
  IconDatabase,
  IconLayoutDashboard,
} from "@tabler/icons-react";

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Product Interfaces",
    description:
      "I build interfaces around real workflows — dashboards, operational screens, forms, tables, search, filtering, and the states users encounter along the way.",
    technologies: ["React", "Next.js", "TypeScript"],
    icon: IconLayoutDashboard,
  },
  {
    number: "02",
    title: "Frontend Systems",
    description:
      "I care about how a frontend grows: reusable components, predictable state, server-state management, responsive behavior, accessibility, and interaction design.",
    technologies: ["Tailwind CSS", "TanStack Query", "Zustand"],
    icon: IconComponents,
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "I build APIs and the supporting data layer with authentication, validation, business rules, logging, caching, and database design in mind.",
    technologies: ["ASP.NET Core", "SQL Server", "Redis"],
    icon: IconDatabase,
  },
  {
    number: "04",
    title: "Real-time & Performance",
    description:
      "When an application needs more than request-and-response, I work with real-time communication, device integration, caching, and performance-focused UI patterns.",
    technologies: ["WebSockets", "Redis", "Performance"],
    icon: IconActivity,
  },
];
