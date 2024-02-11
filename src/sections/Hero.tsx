import Button from "@/components/Button";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { client } from "../../sanity/lib/client";

interface HeroData {
  name:string;
  title: string;
  desc: string;
  link:string;
}

function Hero() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    client
      .fetch<HeroData[]>('*[_type == "hero"]{name,title,desc,link}')
      .then((data) => {
        if (data && data.length > 0) {
          setHeroData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="/" className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        {heroData?.name || "Piraharish."}
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        {heroData?.title || "I craft things for the web."}
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        {heroData?.desc}
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button text="Let's Connect&nbsp;&rarr;" link={heroData?.link || "https://linkedin.com/in/piraharish"} />
      </motion.div>
    </div>
  );
}

export default Hero;
