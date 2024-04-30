import fetchAboutData from "@/actions/fetchAboutData";
import { MotionDiv, MotionLi, MotionP } from "@/components/motions";
import SectionTitle from "@/components/ui/SectionTitle";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const About = async () => {
  const aboutData = await fetchAboutData();

  return (
    <section id="about" className="min-h-screen">
      <SectionTitle title={aboutData?.title || "About Me"} titleNo="01." />
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {aboutData?.paragraphs?.map((paragraph, index) => (
            <MotionP
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.2 + index * 0.1,
              }}
              key={index}
              className="tracking-wide text-base"
            >
              {paragraph}
            </MotionP>
          ))}
          <ul className="grid grid-cols-2 gap-x-3 p-0 mt-5 overflow-hidden list-none">
            {aboutData?.technologies?.map((technology, idx) => (
              <MotionLi
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  delay: 0.5 + idx * 0.1,
                }}
                key={idx}
                className="text-sm font-mono relative mb-2 pl-5 li-before"
              >
                {technology}
              </MotionLi>
            ))}
          </ul>
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 1.35,
            }}
            className="mt-12 flex max-sm:justify-center"
          >
            <Link
              href="/#skills"
              className="text-primary font-mono font-medium tracking-wide px-4 py-2 rounded border border-solid border-primary bg-transparent text-lg outline-none flex duration-300 btn w-max"
            >
              Other Skills
            </Link>
          </MotionDiv>
        </div>
        {aboutData && (
          <MotionDiv
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="h-max mx-auto relative aspect-square w-96 object-cover"
          >
            <div className="absolute tran300 z-10 aspect-square w-96 bg-primary/40 rounded hover:bg-transparent peer" />
            <Image
              className="tran300 h-auto w-auto z-0 rounded peer-hover:-translate-x-2 peer-hover:-translate-y-2"
              src={urlForImage(aboutData.image)}
              alt="profile"
              loading="eager"
              quality={100}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="tran300 -z-10 h-full w-full absolute border-2 border-solid border-primary top-3 left-3 rounded peer-hover:top-4 peer-hover:left-4" />
          </MotionDiv>
        )}
      </div>
    </section>
  );
};

export default About;
