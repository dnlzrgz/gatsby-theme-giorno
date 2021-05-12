export default {
  name: "plainContent",
  title: "Plain Content Block",
  type: "array",
  description: "Text editor for plain text.",
  of: [
    {
      type: "block",
      styles: [],
      lists: [],
      marks: {
        decorators: [],
        annotations: [],
      },
    },
  ],
  validation: (Rule) => Rule.required(),
};
