import { graphql } from 'gatsby';

export const query = graphql`
	fragment PageBuilder on SanityPage {
		pageBuilder {
			type: _type
			title
			subtitle
			image {
				asset {
					fluid {
						...GatsbySanityImageFluid
					}
					fixed {
						...GatsbySanityImageFixed
					}
				}
			}
			cta {
				url
				title
			}
		}
	}
`;
