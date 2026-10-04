import { ExperienceItem } from "@/types/experience";
import { IconCode, IconGitBranch, IconTerminal2 } from "@tabler/icons-react";

export const experience: ExperienceItem[] = [
  {
    period: "Sep 2025 — Present",
    role: "Developer",
    company: "CodeValue Technologies",
    description:
      "Focused on improving how our frontend applications are built while continuing to contribute across the full development stack.",
    responsibilities: [
      "Contributed to improving the team's frontend development workflow by adopting modern tools and development practices.",
      "Introduced and migrated React projects to Vite, improving development startup time, Hot Module Replacement, and production build performance.",
      "Introduced a centralized theming approach using CSS variables and shadcn/ui, including application-wide light and dark mode support.",
      "Introduced TanStack Query for data fetching and server-state management, improving caching, scalability, and application performance.",
    ],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "ASP.NET Core",
      "SQL Server",
      "DevOps",
      "Git",
    ],
    icon: IconGitBranch,
  },
  {
    period: "Jul 2025 — Sep 2025",
    role: "Junior Developer",
    company: "CodeValue Technologies",
    description:
      "Designed, developed, and maintained scalable web applications with a focus on clean, maintainable code across the frontend and backend.",
    responsibilities: [
      "Designed and developed responsive web applications using React for the frontend.",
      "Built backend APIs and business logic using ASP.NET Core.",
      "Worked with Microsoft SQL Server for database design, queries, and application data.",
      "Maintained and improved existing applications while keeping the codebase clean, reusable, and maintainable.",
    ],
    technologies: [
      "React",
      "Tailwind CSS",
      "ASP.NET Core",
      "SQL Server",
      "Git",
    ],
    icon: IconCode,
  },
  {
    period: "Oct 2024 — Jun 2025",
    role: "Junior Technical Trainee",
    company: "CodeValue Technologies",
    description:
      "Built my foundation in software development through hands-on learning, progressing from programming fundamentals to web application development.",
    responsibilities: [
      "Learned C# fundamentals and object-oriented programming through console-based applications.",
      "Worked with Microsoft SQL Server to understand relational databases, queries, and data management.",
      "Learned ASP.NET MVC and applied backend and frontend concepts to build structured web applications.",
      "Built a strong foundation in programming, databases, web development, and application architecture.",
    ],
    technologies: ["C#", "OOP", "SQL Server", "ASP.NET MVC", "Git"],
    icon: IconTerminal2,
  },
];
