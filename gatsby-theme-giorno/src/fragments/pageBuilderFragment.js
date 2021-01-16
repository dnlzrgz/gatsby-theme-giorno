import { graphql } from 'gatsby';

export const query = graphql`
	fragment PageBuilder on SanityPage {
		pageBuilder {
			... on SanityHero {
				_key
				_type
				cta {
					title
					url
					_type
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
						title
						url
					}
				}
				subtitle
				title
			}
			... on SanityTextSection {
				_key
				_type
				_rawContent
				title
				description
				content {
					_key
					_type
					list
					style
					children {
						marks
						text
						_type
						_key
					}
				}
			}
		}
	}
`;
