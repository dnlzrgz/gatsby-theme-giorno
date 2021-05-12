export default {
  name: "pageBuilder",
  title: "Page builder",
  type: "array",
  options: {
    editModal: "fullscreen",
  },
  of: [
    { type: "hero" },
    { type: "blankHero" },
    { type: "blockSection" },
    { type: "gridSection" },
    { type: "projectShowcase" },
    { type: "form" },
    { type: "quote" },
  ],
  validation: (Rule) => Rule.min(1),
};
