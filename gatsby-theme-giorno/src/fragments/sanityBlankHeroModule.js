import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityBlankHeroModule on SanityPage {
    pageBuilder {
      ... on SanityBlankHero {
        _key
        _type
        title
        description {
          _rawChildren
          _type
          children {
            _key
            _type
            marks
            text
          }
        }
        textAlignment
        cta {
          title
          url
        }
      }
    }
  }
`;
