import Link from "next/link";
import { useEffect, useState } from "react";
import { Gitbranch, Star } from "./icons";

const Footer = () => {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null ||0,
    forks: null||0,
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/repos/piraharish/next-portfolio')
      .then(response => response.json())
      .then(json => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch(e => console.error(e));
  }, []);  

  return (
    <footer className="w-full p-8 text-center">
      <Link
        href="https://github.com/piraharish/next-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="text-base font-mono tracking-wide tran300 hover:text-primary"
      >
        Built by Piraharish.
      {githubInfo && (
        <div className="flex gap-x-4 mt-2 items-center justify-center">
        <span className="flex gap-x-1.5 items-center">
          <Star />
          <span>{githubInfo.stars}</span>
        </span>
        <span className="flex gap-x-1.5 items-center">
          <Gitbranch />
          <span>{githubInfo.forks}</span>
        </span>
      </div>
      )}
      </Link>
    </footer>
  );
};

export default Footer;
