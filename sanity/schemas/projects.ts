const projectsData = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "The Image of the Project",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectName",
      title: "Project Name",
      description: "The Name of the Project",
      type: "string",
    },
    {
      name: "projectDescription",
      title: "Project Description",
      type: "text",
      description: "The Description of the Project",
    },
    {
      name: "projectTech",
      title: "Project Technologies",
      type: "array",
      description: "The Tech Stack of the Project",
      of: [{ type: "string" }],
    },
    {
      name: "projectExternalLinks",
      title: "Project External Links",
      type: "object",
      fields: [
        {
          name: "github",
          title: "GitHub Link",
          type: "url",
        },
        {
          name: "externalLink",
          title: "External Link",
          type: "url",
        },
      ],
    },
  ],
};

export default projectsData;
