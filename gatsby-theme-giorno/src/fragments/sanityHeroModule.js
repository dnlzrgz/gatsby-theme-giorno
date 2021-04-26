import { graphql } from "gatsby";

export const query = graphql`
  fragment SanityHeroModule on SanityPage {
    pageBuilder {
      ... on SanityHero {
        _key
        _type
        title
        subtitle
        whiteText
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
