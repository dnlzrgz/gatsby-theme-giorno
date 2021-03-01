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
					_id
					name
					description
					slug {
						current
					}
					_rawImage
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
