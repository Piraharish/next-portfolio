"use server";

import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

interface AboutData {
  title: string;
  paragraphs: string[];
  technologies: string[];
  image: any;
}

const fetchAboutData = async () => {
  noStore();
  try {
    const data = await client.fetch<AboutData>(
      `*[_type == "about"]{
          title,
          paragraphs,
          technologies,
          image,
        }[0]`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching about data:", error);
    return null;
  }
};

export default fetchAboutData;
