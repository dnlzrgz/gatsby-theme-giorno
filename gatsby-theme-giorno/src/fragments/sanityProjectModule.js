import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityProjectModule on SanityPage {
    pageBuilder {
      ... on SanityProjectShowcase {
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
        projects {
          _id
          name
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
          slug {
            current
          }
          image {
            asset {
              gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
`;
