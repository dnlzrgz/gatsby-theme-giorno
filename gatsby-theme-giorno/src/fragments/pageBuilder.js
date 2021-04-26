import { graphql } from "gatsby";

export const query = graphql`
  fragment PageBuilder on SanityPage {
    ...SanityBlankHeroModule
    ...SanityBlockSectionModule
    ...SanityFormModule
    ...SanityGridSectionModule
    ...SanityHeroModule
    ...SanityProjectModule
    ...SanityQuoteModule
  }
`;
