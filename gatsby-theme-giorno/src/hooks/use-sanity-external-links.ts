import { graphql, useStaticQuery } from "gatsby";

interface ILinkNode {
  node: {
    id: string;
    title: string;
    url: string;
  };
}

const useSanityExternalLinks = (): ILinkNode[] => {
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
