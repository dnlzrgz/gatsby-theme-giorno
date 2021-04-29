import { BsListUl as icon } from "react-icons/bs";

export default {
  name: "form",
  title: "Form",
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
      name: "name",
      title: "Form name",
      type: "string",
      description: "Name attribute to reference each form input after a form is submitted.",
      validation: (Rule) => Rule.required().lowercase().error("All characters must be in lowercase"),
    },
    {
      name: "inputs",
      title: "Inputs",
      type: "array",
      description: "Array of inputs to create a custom form.",
      of: [{ type: "input" }, { type: "textarea" }],
    },
    {
      name: "submit",
      title: "Submit",
      type: "submit",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: `Form - ${title}`,
      };
    },
  },
};
