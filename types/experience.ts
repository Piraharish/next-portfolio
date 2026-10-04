import { Icon } from "@tabler/icons-react";

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  icon: Icon;
};
