import type { Icon } from "@tabler/icons-react";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  icon: Icon;
  href?: string;
  featured?: boolean;
};
