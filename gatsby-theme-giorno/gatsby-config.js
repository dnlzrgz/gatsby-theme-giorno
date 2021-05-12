module.exports = ({ projectId, dataset, token }) => ({
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId,
        dataset,
        token,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
  ],
});
