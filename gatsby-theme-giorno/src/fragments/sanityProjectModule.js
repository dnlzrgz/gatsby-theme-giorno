import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityProjectModule on SanityPage {
    pageBuilder {
      ... on SanityProjectShowcase {
        _key
        _type
        title
        description {
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
