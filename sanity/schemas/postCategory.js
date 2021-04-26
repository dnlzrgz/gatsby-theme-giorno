import { FaTag as icon } from "react-icons/fa";

export default {
  name: "postCategory",
  title: "Post category",
  type: "document",
  icon,
  description: "Post categories.",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};
