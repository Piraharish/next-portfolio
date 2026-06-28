"use server";

import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from "next/cache";

interface ContactData {
  title: string;
  subTitle: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}
const fetchContactData = async () => {
  noStore();
  try {
    const data = await client.fetch<ContactData>(
      `*[_type == "contact"][0]{ title, subTitle, text, buttonText, buttonLink}`,
    );
    return data;
  } catch (error) {
    console.error("Error fetching Contact data:", error);
    return null;
  }
};

export default fetchContactData;
