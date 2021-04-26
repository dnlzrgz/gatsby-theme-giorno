import { graphql, useStaticQuery } from "gatsby";

const useSanityExternalLinks = () => {
  const data = useStaticQuery(graphql`
    query {
      links: allSanityExternalLinks {
        edges {
          node {
            id
            title
            url
          }
        }
      }
    }
  `);

  return data.links.edges;
};

export default useSanityExternalLinks;
