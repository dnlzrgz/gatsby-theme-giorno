const path = require("path");
require("dotenv").config({
  path: path.resolve("../.env"),
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://giorno-demo.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET_NAME,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
  ],
};
