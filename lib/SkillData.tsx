import {
  Bootstrap,
  CSS,
  Django,
  ExpressJS,
  Gitsvg,
  HTML,
  JavaScript,
  MongoDB,
  MySQL,
  NextJS,
  NodeJS,
  Postman,
  Python,
  ReactJS,
  Tailwind,
  TypeScript,
} from "@/components/icons";
import React from "react";
interface skillData {
  name: string;
  icon: React.ReactElement;
  href: string;
}

export const skillData: skillData[] = [
  {
    name: "ReactJS",
    icon: <ReactJS className="size-24" />,
    href: "https://react.dev",
  },
  {
    name: "NextJS",
    icon: <NextJS className="size-24" />,
    href: "https://nextjs.org",
  },
  {
    name: "JavaScript",
    icon: <JavaScript className="size-24" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    name: "TypeScript",
    icon: <TypeScript className="size-24" />,
    href: "https://www.typescriptlang.org",
  },
  {
    name: "HTML",
    icon: <HTML className="size-24" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <CSS className="size-24" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap className="size-24" />,
    href: "https://getbootstrap.com",
  },
  {
    name: "Tailwind",
    icon: <Tailwind className="size-24" />,
    href: "https://tailwindcss.com",
  },
  {
    name: "Python",
    icon: <Python className="size-24" />,
    href: "https://python.org",
  },
  {
    name: "Django",
    icon: <Django className="size-24" />,
    href: "https://www.djangoproject.com/",
  },
  {
    name: "Node JS",
    icon: <NodeJS className="size-24" />,
    href: "https://nodejs.org/en",
  },
  {
    name: "Express JS",
    icon: <ExpressJS className="size-24" />,
    href: "https://expressjs.com/",
  },
  {
    name: "GitHub",
    icon: <Gitsvg className="size-24" />,
    href: "https://www.github.com/",
  },
  {
    name: "Postman",
    icon: <Postman className="size-24" />,
    href: "https://www.postman.com",
  },
  {
    name: "MySQL",
    icon: <MySQL className="size-24" />,
    href: "https://www.mysql.com",
  },
  {
    name: "MongoDB",
    icon: <MongoDB className="size-24" />,
    href: "https://mongodb.com",
  },
];
