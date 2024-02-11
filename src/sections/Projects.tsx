import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";

interface ProjectData {
  projectName: string;
  image: any;
  projectDescription: string;
  projectExternalLinks: {
    github: string;
    externalLink: string;
  };
  projectTech: string[];
}

function Projects() {
  const [projectsData, setProjectsData] = useState<ProjectData[]>([]);

  useEffect(() => {
    client
      .fetch<ProjectData[]>(
        `*[_type == "project"]|order(_createdAt desc){
        projectName,
        image,
        projectDescription,
        projectExternalLinks,
        projectTech}`
      )
      .then((data) => {
        setProjectsData(data);
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
      });
  }, []);

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I&rsquo;ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image
                      src={urlForImage(image)}
                      fill
                      sizes="100"
                      alt={projectName}
                      quality={100}
                    />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <Link
                    href={projectExternalLinks.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="project-info-title">{projectName}</h3>
                  </Link>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech, index) => (
                      <li
                        className="project-info-tech-list-item"
                        key={`${tech}-${index}`}
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
