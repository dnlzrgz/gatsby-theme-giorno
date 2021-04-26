import { BsFillGrid1X2Fill as icon } from "react-icons/bs";

export default {
  name: "gridSection",
  title: "Grid Section",
  type: "object",
  icon,
  fields: [
    {
      name: "title",
      type: "title",
    },
    {
      name: "description",
      type: "description",
    },
    {
      name: "internalLink",
      type: "internalLink",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      description: "",
      of: [{ type: "gridItem" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `Grid Section - ${title}`,
      };
    },
  },
};
