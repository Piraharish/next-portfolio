import { type SchemaTypeDefinition } from "sanity";
import heroData from "./hero";
import aboutData from "./about";
import projectsData from "./projects";
import educationData from "./education";
import contactData from "./contact";
import resumeData from "./resumeData";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroData, resumeData, aboutData, educationData, projectsData, contactData],
};
