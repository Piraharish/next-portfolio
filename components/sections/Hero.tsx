import fetchHeroData, { HeroData } from "@/actions/fetchHerodata";
import { MotionDiv, MotionH2, MotionH6, MotionP } from "@/components/motions";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHeroData();
      setHeroData(data);
    };

    fetchData();
  }, []);

  return (
    <section id="/" className="items-start p-0 mb-10">
      <MotionH6
        className="text-primary text-lg font-semibold tracking-wide font-mono mb-8 ml-1"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        {heroData?.greeting}
      </MotionH6>
      <MotionH2
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        {heroData?.name}
      </MotionH2>
      <MotionH2
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-1"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        {heroData?.title}
      </MotionH2>
      <MotionP
        className="mt-5 font-medium tracking-wider max-w-[540px]"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        {heroData?.desc}
      </MotionP>
      <MotionDiv
        className="mt-12"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button
          text="Let's Connect&nbsp;&rarr;"
          link={heroData?.link || "https://linkedin.com/in/piraharish"}
        />
      </MotionDiv>
    </section>
  );
};

export default Hero;
