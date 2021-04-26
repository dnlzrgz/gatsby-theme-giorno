// This file is required to get images from
// Sanity using the 'gatsby-source-sanity' plugin

export default {
  sanity: {
    projectId: process.env.GATSBY_SANITY_PROJECT_ID || "<#< sanity.projectId >#>",
    dataset: process.env.GATSBY_SANITY_DATASET_NAME || "<#< sanity.dataset >#>",
  },
};
