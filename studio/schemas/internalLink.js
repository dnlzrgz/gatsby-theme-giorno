export default {
  name: "internalLink",
  title: "Internal link",
  type: "object",
  description: "A link to an internal page.",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "title",
      description: "Internal link title",
    },
    {
      name: "href",
      title: "Relative path",
      type: "string",
      description: "Relative path to an internal page.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
