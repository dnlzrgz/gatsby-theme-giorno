import { graphql, useStaticQuery } from "gatsby";

interface IPage {
  id: string;
  title: string;
  public: boolean;
  slug: {
    current: string;
  };
}

const useAllPages = (): Array<IPage> => {
  const data = useStaticQuery(graphql`
    query {
      pages: allSanityPage(filter: { public: { eq: true }, slug: { current: { ne: "index" } } }) {
        nodes {
          id
          title
          public
          slug {
            current
          }
        }
      }
    }
  `);

  return data.pages.nodes;
};

export default useAllPages;
