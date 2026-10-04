import type { Icon } from "@tabler/icons-react";

export type ProjectType = "featured" | "confidential" | "archive";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: Icon;

  type: ProjectType;

  href?: string;
  image?: string;
  imageAlt?: string;

  featured?: boolean;
};
