import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityQuoteModule on SanityPage {
    pageBuilder {
      ... on SanityQuote {
        _key
        _type
        _rawQuote
        author
        quote {
          _key
          _rawChildren
          _type
          children {
            _key
            _type
            text
            marks
          }
          list
          style
        }
      }
    }
  }
`;
