import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityCodeSectionModule on SanityPage {
    pageBuilder {
      ... on SanityCodeSection {
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
          _type
          external
          title
          url
        }
        _rawCode
        code {
          _key
          _type
          code
          filename
          highlightedLines
          language
        }
      }
    }
  }
`;
