import { MotionDiv } from "@/components/motions";
import MobileNav from "@/components/navbar/MobileNav";
import NavLinks from "@/components/navbar/NavLinks";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import Logo from "../ui/Logo";

interface ResumeData {
  buttonText: string | undefined;
  resume: string | undefined;
}

const Navbar = () => {
  const [resumeFileData, setResumeFileData] = useState<ResumeData | null>(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState<Boolean | null>(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      setIsNavbarVisible(!isScrollingDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    client
      .fetch<ResumeData>(
        `*[_type == "resumeButton"][0]{
        buttonText,
        "resume":resume.asset->url,
      }`
      )
      .then((data) => {
        setResumeFileData(data);
      })
      .catch((error) => {
        console.error("Error fetching resume file data:", error);
      });
  }, []);

  return (
    <nav
      className={`flex fixed top-0 w-full bg-background/95 backdrop-blur-sm h-20 justify-between items-center px-6 md:px-12 z-50 transition-transform duration-500 ${
        isNavbarVisible ? "" : "-translate-y-full"
      }`}
    >
      <MotionDiv
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <Logo />
      </MotionDiv>

      {/* Nav Links */}

      <NavLinks
        buttonText={resumeFileData?.buttonText}
        resume={resumeFileData?.resume}
      />

      {/* Responsive Nav */}

      <MobileNav
        buttonText={resumeFileData?.buttonText}
        resume={resumeFileData?.resume}
      />
    </nav>
  );
};

export default Navbar;
