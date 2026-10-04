import { Icon } from "@tabler/icons-react";

export type ArchiveItem = {
  year: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  icon: Icon;
  type: "experiment" | "learning" | "side-project";
  href?: string;
};
