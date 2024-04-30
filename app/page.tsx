import { Email } from "@/components/Email";
import Footer from "@/components/Footer";
import LoadingWrapper from "@/components/LoadingWrapper";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { SocialIcons } from "@/components/Socials";
import { Suspense } from "react";
import { LuLoader2 } from "react-icons/lu";

const Page = () => {
  return (
    <LoadingWrapper>
      <main>
        <Navbar />
        <SocialIcons />
        <Email />
        <div className="max-w-5xl w-full flex flex-col gap-y-8 mx-auto px-4 sm:px-8 md:px-24 lg:px-28 xl:p-0">
          <Suspense fallback={<LuLoader2 className="animate-spin" />}>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </Suspense>
        </div>
      </main>
    </LoadingWrapper>
  );
};
export default Page;
