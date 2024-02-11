import Link from "next/link";
import React from "react";
// import { FaRegStar } from "react-icons/fa";
// import { FiGitBranch } from "react-icons/fi";

function Footer() {
  // const [githubInfo, setGitHubInfo] = useState({
  //   stars: null,
  //   forks: null,
  // });

  // useEffect(() => {
  //   fetch("https://api.github.com/repos/koolkishan/chat-app-react-nodejs")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const { stargazers_count, forks_count } = json;
  //       setGitHubInfo({
  //         stars: stargazers_count,
  //         forks: forks_count,
  //       });
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  return (
    <footer>
      <Link
        href="https://github.com/Piraharish"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Inspired and Built by Piraharish.</span>
        {/* {githubInfo && (
          <div className="footer-git">
            <div className="footer-git-item">
              <FaRegStar className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.stars}</span>
            </div>
            <div className="footer-git-item">
              <FiGitBranch className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.forks}</span>
            </div>
          </div>
        )} */}
      </Link>
    </footer>
  );
}

export default Footer;
