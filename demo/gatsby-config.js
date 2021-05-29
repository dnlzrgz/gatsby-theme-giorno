const path = require("path");
require("dotenv").config({
  path: path.resolve("./.env"),
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://giorno-demo.netlify.app",
  },
  flags: {
    FAST_DEV: true,
    FAST_REFRESH: true,
    PRESERVE_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    {
      resolve: "gatsby-theme-giorno",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET_NAME,
        enablePreact: process.env.NODE_ENV === "production",
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
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
  ],
};
