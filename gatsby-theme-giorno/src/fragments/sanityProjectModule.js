import { graphql } from 'gatsby';

export const query = graphql`
	fragment SanityProjectModule on SanityPage {
		pageBuilder {
			... on SanityProjectShowcase {
				_key
				_type
				title
				description
				projects {
					name
					description
					_rawImage
					slug {
						current
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
	}
`;
