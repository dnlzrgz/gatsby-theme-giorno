import { BsKanbanFill as icon } from "react-icons/bs";

export default {
  name: "project",
  title: "Project",
  type: "document",
  icon,
  fields: [
    {
      name: "name",
      title: "Project name",
      description: "Project title or name.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "Project slug.",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Brief project description.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Project image",
      type: "image",
      description: "An image to showcase the project.",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
