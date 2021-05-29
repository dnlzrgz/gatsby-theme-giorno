const isDev = process.env.NODE_ENV === "development";

module.exports = ({ projectId, dataset, enablePreact = false }) => ({
  plugins: [
    enablePreact ? "gatsby-plugin-preact" : "",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        watchMode: isDev,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
  ].filter(Boolean),
});
