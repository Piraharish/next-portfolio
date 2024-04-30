import fetchHeroData from "@/actions/fetchHerodata";
import {
  MotionDiv,
  MotionH1,
  MotionH2,
  MotionH6,
  MotionP,
} from "@/components/motions";
import Button from "@/components/ui/Button";

const Hero = async () => {
  const heroData = await fetchHeroData();

  return (
    <section id="/" className="items-start min-h-screen">
      <MotionH6
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="text-primary text-base lg:text-lg font-semibold tracking-wide font-mono mb-8 ml-1"
      >
        {heroData?.greeting}
      </MotionH6>
      <MotionH1
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          delay: 0.75,
        }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
      >
        {heroData?.name}
      </MotionH1>
      <MotionH2
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          delay: 1.05,
        }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-1"
      >
        {heroData?.title}
      </MotionH2>
      <MotionP
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
          delay: 1.35,
        }}
        className="mt-5 font-medium tracking-wider max-w-prose"
      >
        {heroData?.desc}
      </MotionP>
      <MotionDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
        className="mt-12"
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
