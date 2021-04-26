export default {
  name: "footerConfig",
  title: "Footer",
  type: "object",
  description: "Footer related configuration.",
  fields: [
    {
      name: "sitemap",
      title: "Enable sitemap",
      type: "boolean",
      description: "Displays a sitemap on the footer of every page.",
    },
    {
      name: "copyright",
      title: "Copyright message",
      type: "string",
      description: "Copyright message.",
      validation: (Rule) => Rule.required(),
    },
  ],
};
