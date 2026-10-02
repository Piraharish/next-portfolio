import { ContactLink } from "@/types/contact";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export const contactContent = {
  eyebrow: "Get in touch",
  title: "Have a problem worth building?",
  description:
    "I'm always interested in thoughtful products, challenging engineering problems, and opportunities to build something useful.",
  email: "piraharish.s@gmail.com",
  location: "Chennai, India",
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "piraharish.s@gmail.com",
    href: "mailto:piraharish.s@gmail.com",
    icon: IconMail,
  },
  {
    label: "GitHub",
    value: "github.com/Piraharish",
    href: "https://github.com/Piraharish",
    icon: IconBrandGithub,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/piraharish",
    href: "https://www.linkedin.com/in/piraharish",
    icon: IconBrandLinkedin,
    external: true,
  },
];
