import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityHeroModule on SanityPage {
    pageBuilder {
      ... on SanityHero {
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
        whiteText
        textAlignment
        cta {
          title
          url
        }
        image {
          asset {
            gatsbyImageData(placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  }
`;
