"use server";

import { client } from "@/sanity/lib/client";

interface EducationProps {
    title: string;
    educationList:[
      {
        name: string;
        role: string;
        url: string;
        start: string;
        end: string;
        shortDescription: string[];
      }
    ];
  }

const fetchEducationData = async () => {
  try {
    const data = await client.fetch<EducationProps>(
      `*[_type == "education"]{
        title,
        educationList[] {
          name,
          role,
          url,
          start,
          end,
          shortDescription[],
        }
      }[0]`
    );

    return data;
  } catch (error) {
    console.error("Error fetching education data:", error);
    return null;
  }
};

export default fetchEducationData;
