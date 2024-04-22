"use client";

import { Email } from "@/components/Email";
import Footer from "@/components/Footer";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { SocialIcons } from "@/components/Socials";
import Loader from "@/components/ui/Loader";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <main>
      <Navbar />
      <SocialIcons />
      <Email />
      <div className="max-w-5xl w-full flex flex-col gap-y-8 mx-auto px-4 sm:px-8 md:px-24 lg:px-28 xl:p-0">
        <Suspense fallback={<p>Loading...</p>}>
          <Hero />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <About />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Education />
        </Suspense>
        <Suspense fallback={<p>Loading...</p>}>
          <Projects />
        </Suspense>
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
