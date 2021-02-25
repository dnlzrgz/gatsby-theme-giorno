import { graphql } from 'gatsby';

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
					_type
					title
					url
				}
				image {
					_type
					asset {
						fixed {
							...GatsbySanityImageFixed
						}
						fluid {
							...GatsbySanityImageFluid
						}
					}
				}
			}
		}
	}
`;
