import { graphql } from 'gatsby';

export const query = graphql`
	fragment SanityBlankHeroModule on SanityPage {
		pageBuilder {
			... on SanityBlankHero {
				_key
				_type
				title
				subtitle
				cta {
					_type
					title
					url
				}
			}
		}
	}
`;
