"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { skillData } from "@/lib/SkillData";
import { EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Link from "next/link";

type PropType = {
  plugins?: EmblaPluginType[];
};

const Skills = () => {
  const data = skillData;
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  return (
    <section id="skills" className="min-h-[80vh] gap-y-10">
      <div className="text-center mt-20 space-y-3">
        <h2 className="text-lg text-primary font-mono">
          <span className="mr-2">04.</span>
          Skills
        </h2>
        <h1 className="text-4xl font-extrabold">{"Tech Stack I've Used"}</h1>
      </div>
      <div className="m-auto flex w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y backface-invisible gap-4">
            {data.map((skill) => (
              <Link
                href={skill.href}
                key={skill.name}
                aria-label={`Link to ${skill.name}`}
                title={`Link to ${skill.name}`}
                className="min-w-0 flex-35 flex flex-col gap-2 text-lg font-semibold items-center justify-center animate-pulse hover:animate-none"
              >
                {skill.icon}
                {skill.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
