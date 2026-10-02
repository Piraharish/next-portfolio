import { Icon } from "@tabler/icons-react";

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: Icon;
  external?: boolean;
};
