export default {
  name: "externalLink",
  title: "External link",
  type: "object",
  description: "A link to an external site.",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "External link title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      description: "External URL",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
