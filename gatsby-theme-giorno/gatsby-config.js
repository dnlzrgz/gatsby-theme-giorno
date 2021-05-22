module.exports = ({ projectId, dataset }) => ({
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        watchMode: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
  ],
});
