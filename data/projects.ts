import { Project } from "@/types/projects";
import { IconBuildingWarehouse, IconUsers } from "@tabler/icons-react";

export const projects: Project[] = [
  {
    number: "01",
    title: "Inventory Count System",
    category: "Warehouse Operations",
    description:
      "A warehouse-focused application for managing inventory counting workflows, Transfer orders, Journals, Role management, and more Inventory workflows.",
    technologies: [
      "React",
      "Tailwind CSS",
      "ASP.NET Core",
      "SQL Server",
      "D365 Finance & Operations",
      "External API Integration",
    ],
    icon: IconBuildingWarehouse,
    type: "confidential",
  },

  {
    number: "02",
    title: "Core HR",
    category: "Employee Self-Service portal",
    description:
      "An internal employee self-service platform covering payroll, leave management, attendance, reporting structures, calendars, and HR workflows.",
    technologies: ["React", "ASP.NET Core", "Microservices", "SQL Server"],
    icon: IconUsers,
    type: "confidential",
  },
];
