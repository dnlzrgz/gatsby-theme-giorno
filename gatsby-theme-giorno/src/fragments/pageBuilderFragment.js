import { graphql } from 'gatsby';

export const query = graphql`
	fragment PageBuilder on SanityPage {
		pageBuilder {
			... on SanityBlankHero {
				_key
				_type
				subtitle
				title
				cta {
					_key
					_type
					title
					url
				}
			}
			... on SanityHero {
				_key
				_type
				title
				subtitle
				whiteText
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
			}
			... on SanityBlockSection {
				_key
				_type
				title
				description
				_rawContent
				content {
					children {
						_key
						_type
						marks
						text
					}
					_key
					_type
					list
					style
				}
			}
			... on SanityGridSection {
				_key
				_type
				_rawInternalLink
				_rawItems
				title
				description
				internalLink {
					_key
					_type
					href
					title
				}
				items {
					_key
					_type
					content
					title
				}
			}
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
			... on SanityForm {
				_key
				_type
				_rawInputs
				name
				title
				inputs {
					... on SanityInput {
						_key
						_type
						label
						name
						placeholder
						required
						type
					}
					... on SanityTextarea {
						_key
						_type
						label
						maxLength
						minLength
						name
						placeholder
						required
					}
					... on SanitySubmit {
						_key
						_type
						text
					}
				}
			}
		}
	}
`;
