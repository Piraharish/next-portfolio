import Link from "next/link";
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
} from "../icons";
import { MotionDiv, MotionSection } from "../motions";
import SectionTitle from "../ui/SectionTitle";

interface skillData {
  name: string;
  icon: React.ReactElement;
  href: string;
}

const skillData: skillData[] = [
  {
    name: "ReactJS",
    icon: <ReactJS />,
    href: "https://react.dev",
  },
  {
    name: "NextJS",
    icon: <NextJS />,
    href: "https://nextjs.org",
  },
  {
    name: "JavaScript",
    icon: <JavaScript />,
    href: "https://developer.mozilla.org/en-US/docs/Web/javascript",
  },
  {
    name: "TypeScript",
    icon: <TypeScript />,
    href: "https://www.typescriptlang.org",
  },
  {
    name: "HTML",
    icon: <HTML />,
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <CSS />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Bootstrap",
    icon: <Bootstrap />,
    href: "https://getbootstrap.com",
  },
  {
    name: "Tailwind",
    icon: <Tailwind />,
    href: "https://tailwindcss.com",
  },
  {
    name: "Python",
    icon: <Python />,
    href: "https://python.org",
  },
  {
    name: "Django",
    icon: <Django />,
    href: "https://www.djangoproject.com/",
  },
  {
    name: "Node JS",
    icon: <NodeJS />,
    href: "https://nodejs.org/en",
  },
  {
    name: "Express JS",
    icon: <ExpressJS />,
    href: "https://expressjs.com/",
  },
  {
    name: "GitHub",
    icon: <Gitsvg />,
    href: "https://www.github.com/",
  },
  {
    name: "Postman",
    icon: <Postman />,
    href: "https://www.postman.com",
  },
  {
    name: "MySQL",
    icon: <MySQL />,
    href: "https://www.mysql.com",
  },
  {
    name: "MongoDB",
    icon: <MongoDB />,
    href: "https://mongodb.com",
  },
];

const Skills = () => {
  return (
    <MotionSection
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <SectionTitle title={"Tech Stack I've Used"} titleNo={"04."} />
      <div className="list-none grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {skillData.map((data, index) => (
          <Link
            className="custom-focus focus:-translate-y-2 tran300 rounded-sm bg-gradient-to-b from-slate-300/5 to-background hover:bg-slate-300/10 hover:-translate-y-2 hover:animate-pulse focus:animate-pulse"
            key={index}
            href={data.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MotionDiv
              className="flex flex-col items-center gap-3 text-lg font-medium tracking-wide py-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.3 + index * 0.1,
              }}
            >
              {data.icon}
              {data.name}
            </MotionDiv>
          </Link>
        ))}
      </div>
    </MotionSection>
  );
};

export default Skills;
