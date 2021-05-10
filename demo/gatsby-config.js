const path = require("path");
require("dotenv").config({
  path: path.resolve("./.env"),
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://giorno-demo.netlify.app",
  },
  plugins: [
    {
      resolve: "gatsby-theme-giorno",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET_NAME,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Giorno Theme",
        short_name: "Giorno",
        icon: "src/images/favicon.png",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#3b82f6",
        display: "standalone",
      },
    },
    "gatsby-plugin-remove-serviceworker",
  ],
};
