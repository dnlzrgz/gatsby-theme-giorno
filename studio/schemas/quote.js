import { FaQuoteLeft as icon } from "react-icons/fa";

export default {
  name: "quote",
  title: "Quote",
  type: "object",
  icon,
  description: "",
  fields: [
    {
      name: "quote",
      type: "plainContent",
      description: "",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      author: "author",
    },
    prepare({ author }) {
      return {
        title: `Quote by ${author}`,
      };
    },
  },
};
