import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityGridSectionModule on SanityPage {
    pageBuilder {
      ... on SanityGridSection {
        _key
        _type
        _rawInternalLink
        _rawItems
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
        internalLink {
          _key
          _type
          href
          title
        }
        items {
          _key
          _type
          content
          title
        }
      }
    }
  }
`;
