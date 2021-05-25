import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityCodepenModule on SanityPage {
    pageBuilder {
      ... on SanityCodepenShowcase {
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
          _type
          external
          title
          url
          _key
        }
        codepens {
          url
          _type
        }
      }
    }
  }
`;
