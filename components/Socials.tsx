import Link from "next/link";
import {
  LuFacebook,
  LuGithub,
  LuInstagram,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";
import { MotionDiv } from "./motions";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <LuGithub className="size-5 lg:size-6" />,
      link: "https://www.github.com/Piraharish",
    },
    {
      name: "Facebook",
      icon: <LuFacebook className="size-5 lg:size-6" />,
      link: "https://www.facebook.com/Piraharish",
    },
    {
      name: "LinkedIn",
      icon: <LuLinkedin className="size-5 lg:size-6" />,
      link: "https://www.linkedin.com/in/piraharish",
    },
    {
      name: "Instagram",
      icon: <LuInstagram className="size-5 lg:size-6" />,
      link: "https://instagram.com/Piraharish",
    },
    {
      name: "Twitter",
      icon: <LuTwitter className="size-5 lg:size-6" />,
      link: "https://twitter.com/piraharish",
    },
  ];
  return (
    <MotionDiv
      className="max-md:hidden fixed bottom-0 md:left-4 lg:left-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="list-none flex flex-col gap-y-1 lg:gap-y-2 items-center afterline">
        {socialLinks.map(({ name, icon, link }) => (
          <li
            key={name}
            title={name}
            className="tran300 flex items-center justify-center hover:-translate-y-2 last:mb-8"
          >
            <Link
              href={link}
              aria-label={"Link for " + name}
              className="p-3 tran300 custom-focus text-base lg:text-lg hover:text-primary focus:text-primary focus:-translate-y-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};

export { SocialIcons };
