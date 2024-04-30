import fetchProjects from "@/actions/fetchProjectData";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { MotionDiv } from "../motions";
import SectionTitle from "../ui/SectionTitle";

const Projects = async () => {
  const projectsData = await fetchProjects();

  return (
    <section id="works" className="pt-20">
      <SectionTitle title={projectsData?.title || ""} titleNo={"03."} />
      {projectsData?.projectsList.map((project, index) => (
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
            delay: 0.3 + index * 0.1,
          }}
          key={index}
          className={`flex max-lg:flex-col-reverse mb-24 gap-x-4 gap-y-8 items-center ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex items-center justify-between mb-6 font-bold">
              <Link
                href={project.projectExternalLinks.externalLink}
                target="_blank"
                rel="noopener noreferrer preconnect"
                aria-label={`Live Link to ${project.projectName}`}
                title={`Live Link to ${project.projectName}`}
                className="text-2xl tracking-wider tran300 text-primary custom-focus group"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] tran300 ease-out">
                  {project.projectName}
                </span>
              </Link>
              <p className="text-lg font-mono lg:mr-4">{project.projectType}</p>
            </div>
            <p className="text-base tracking-wide">
              {project.projectDescription}
            </p>

            <ul className="flex flex-wrap gap-x-4">
              {project.projectTech.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className="text-lg font-medium font-mono tracking-wide"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex gap-x-3 items-center afterline2">
              <Link
                href={project.projectExternalLinks.github}
                target="_blank"
                rel="noopener noreferrer preconnect"
                aria-label={"Github link for " + project.projectName}
                className="rounded p-2 tran300 custom-focus hover:text-primary hover:bg-slate-300/10"
              >
                <LuGithub className="size-5" />
              </Link>
              <Link
                href={project.projectExternalLinks.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Live link of " + project.projectName}
                className="rounded p-2 tran300 custom-focus hover:text-primary hover:bg-slate-300/10"
              >
                <LuExternalLink className="size-5" />
              </Link>
            </div>
          </div>
          <Link
            href={project.projectExternalLinks.externalLink}
            aria-label={"Demo of " + project.projectName}
            className="relative aspect-video w-full rounded custom-focus"
          >
            <div className="absolute aspect-video w-full bg-primary/40 rounded tran300 hover:bg-transparent z-[1]" />
            <Image
              src={urlForImage(project.image)}
              alt={"Image of " + project.projectName}
              fill
              sizes="100"
              className="absolute rounded"
            />
          </Link>
        </MotionDiv>
      ))}
    </section>
  );
};

export default Projects;
