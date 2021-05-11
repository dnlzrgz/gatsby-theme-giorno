import { FaFile as icon } from "react-icons/fa";

export default {
  name: "page",
  title: "Page",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "public",
      title: "Public",
      type: "published",
    },
    {
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
    },
  ],
};
