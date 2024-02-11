const educationData = {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "role",
        title: "Course",
        type: "string",
      },
      {
        name: "url",
        title: "URL",
        type: "url",
      },
      {
        name: "start",
        title: "Start Date",
        type: "string",
        description:"eg: January 2024",
      },
      {
        name: "end",
        title: "End Date",
        type: "string",
        description:"eg: January 2024",
      },
      {
        name: "shortDescription",
        title: "Short Description",
        type: "array",
        of: [{ type: "string" }],
      },
    ],
  };
  
  export default educationData;
  