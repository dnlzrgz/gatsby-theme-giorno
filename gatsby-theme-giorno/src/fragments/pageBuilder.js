import { graphql } from 'gatsby';

export const query = graphql`
	fragment PageBuilder on SanityPage {
		...SanityBlankHeroModule
		...SanityHeroModule
		...SanityBlockSectionModule
		...SanityGridSectionModule
		...SanityFormModule
		...SanityProjectModule
	}
`;
