"use server";

import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

interface Project {
  title: string;
  projectsList: [
    {
      image: any;
      projectType: string;
      projectName: string;
      projectDescription: string;
      projectTech: string[];
      projectExternalLinks: {
        github: string;
        externalLink: string;
      };
    },
  ];
}

const fetchProjects = async () => {
  noStore();
  try {
    const data = await client.fetch<Project>(
      `*[_type == "project"]{
        title,
        projectsList[] {
          image,
          projectType,
          projectName,
          projectDescription,
          projectTech[],
          projectExternalLinks,
        }
      }[0]`,
    );

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return null;
  }
};

export default fetchProjects;
