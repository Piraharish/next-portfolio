import { Project } from "@/types/projects";
import {
  IconArrowUpRight,
  IconBuildingWarehouse,
  IconUsers,
} from "@tabler/icons-react";

export const projects: Project[] = [
  {
    number: "01",
    title: "Inventory Count System",
    category: "Warehouse Operations",
    description:
      "A real-world inventory counting platform designed around warehouse workflows, activity management, counting sessions, and operational reliability.",
    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "SQL Server",
      "Redis",
      "WebSockets",
    ],
    icon: IconBuildingWarehouse,
    featured: true,
  },
  {
    number: "02",
    title: "Employee Self-Service",
    category: "Enterprise HR",
    description:
      "An employee self-service platform covering leave management, reporting hierarchy, attendance, calendars, payslips, and HR workflows.",
    technologies: ["React", "ASP.NET Core", "D365FO", "SQL Server"],
    icon: IconUsers,
    featured: true,
  },
];
