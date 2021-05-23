import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityGridSectionModule on SanityPage {
    pageBuilder {
      ... on SanityGridSection {
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
        url {
          _key
          _type
          title
          url
        }
        items {
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
        }
      }
    }
  }
`;
