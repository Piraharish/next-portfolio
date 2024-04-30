import fetchGitData from "@/actions/fetchGitData";
import Link from "next/link";
import { LuGitBranch, LuStar } from "react-icons/lu";

const Footer = async () => {
  const gitData = await fetchGitData();

  return (
    <footer className="p-8 text-center">
      <Link
        href="https://github.com/piraharish/next-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col text-base font-mono tracking-wide tran300 hover:text-primary custom-focus w-max mx-auto"
      >
        Built by Piraharish.
        <div className="flex gap-x-4 mt-2 items-center justify-center">
          <span className="flex gap-x-1.5 items-center">
            <LuStar />
            {gitData?.stars}
          </span>
          <span className="flex gap-x-1.5 items-center">
            <LuGitBranch />
            {gitData?.forks}
          </span>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
