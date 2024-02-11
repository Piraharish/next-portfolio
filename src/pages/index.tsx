import Head from "next/head";
import Email from "@/components/Email";
import Loader from "@/components/Loader";
import SocialIcons from "@/components/SocialIcons";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import React, { useState } from "react";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className="app">
      <Head>
        <title>Piraharish</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:title" content="Piraharish | Portfolio" />
        <meta property="og:description" content="A personal portfolio website for Piraharish." />
        <meta property="og:image" itemProp="image" content="/Piraharish.png" />
        <meta property="og:url" content="https://piraharish-portfolio.netlify.app" />
        <meta property="msapplication-tileImage" content="/Piraharish.png" />
        <meta name="twitter:card" content="summary_large" />
      </Head>
      {showContent && (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
      <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
    </div>
  );
}

export default Index;
