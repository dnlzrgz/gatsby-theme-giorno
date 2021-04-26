export default {
  name: "globalConfig",
  title: "Global",
  type: "object",
  description: "Global and SEO configuration.",
  fields: [
    {
      name: "title",
      title: "Site title",
      type: "string",
      description: "Site title.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Site description",
      type: "plainContent",
      description: "Site meta description for SEO. This text will show up as part of a search result entry.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "siteURL",
      title: "URL",
      type: "url",
      description: "Absolute main URL of your site.",
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ["http", "https"],
        }),
    },
    {
      name: "twitterUsername",
      title: "Twitter username",
      type: "string",
      description: "Twitter username for tags SEO.",
      validation: (Rule) =>
        Rule.custom((string) => {
          if (string[0] !== "@") {
            return "The twitter username must start with an @ symbol.";
          }
          return true;
        }),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description: "Image to display by default when your project is being shared in social media.",
    },
    {
      name: "navbar",
      title: "Navigation bar",
      type: "boolean",
      description: "Enables the top navigation bar.",
    },
  ],
};
