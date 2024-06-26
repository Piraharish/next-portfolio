"use server";

import { client } from "@/sanity/lib/client";

interface HeroData {
  greeting: string;
  name: string;
  title: string;
  desc: string;
  link: string;
}

const fetchHeroData = async () => {
  try {
    const data = await client.fetch<HeroData>(
      `*[_type == "hero"]{greeting,name,title,desc,link}[0]`
    );
    return data;
  } catch (error) {
    console.error("Error fetching Hero data:", error);
    return null;
  }
};

export default fetchHeroData;
