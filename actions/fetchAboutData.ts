"use server";

import { client } from "@/sanity/lib/client";

export interface AboutData {
  title: string;
  paragraphs: string[];
  technologies: string[];
  image: any;
}

const fetchAboutData = async () => {
  try {
    const data = await client.fetch<AboutData>(
      `*[_type == "about"]{
          title,
          paragraphs,
          technologies,
          image,
        }[0]`
    );
    return data;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
};

export default fetchAboutData;
