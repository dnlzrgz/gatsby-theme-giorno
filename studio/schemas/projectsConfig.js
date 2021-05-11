export default {
  name: "projectsConfig",
  title: "Projects",
  type: "object",
  description: "Projects configuration.",
  fields: [
    {
      name: "enable",
      title: "Projects page",
      type: "boolean",
      description:
        "Enables the creation of a page on \\projects with all the projects listed, if there are no projects the page will not be created.",
    },
  ],
};
