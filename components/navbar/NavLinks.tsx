import Link from "next/link";
import { MotionDiv, MotionLi } from "../motions";
import Button from "../ui/Button";

export const sectionLinks = [
  { name: "About", no:"01.", link: "/#about" },
  { name: "Education",no:"02.", link: "/#education" },
  { name: "Works",no:"03.", link: "/#works" },
  {
    name: "Contact",
    no:"05.",
    link: "/#contact",
  },
];
const NavLinks = ({
  buttonText,
  resume,
}: {
  buttonText: string | undefined;
  resume: string | undefined;
}) => {
  return (
    <div className="hidden list-none md:flex text-base items-center gap-x-4 font-mono">
      <ul className="flex items-center gap-x-4 list-none">
        {sectionLinks.map(({ name,no, link }, index) => (
          <MotionLi
            key={name}
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.3 + index * 0.1,
            }}
          >
            <Link
              href={link}
              className="custom-focus p-3 tran300 hover:text-primary"
            >
              <span className="text-primary mr-1">{no}</span>
              {name}
            </Link>
          </MotionLi>
        ))}
      </ul>
      <MotionDiv
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        <Button text={buttonText || "Resume"} link={resume || ""} />
      </MotionDiv>
    </div>
  );
};

export default NavLinks;
