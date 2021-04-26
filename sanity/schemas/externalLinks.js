import { BsLink45Deg as icon } from "react-icons/bs";

export default {
  name: "externalLinks",
  title: "External links",
  type: "document",
  icon,
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
