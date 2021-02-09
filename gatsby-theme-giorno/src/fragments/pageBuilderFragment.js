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
			... on SanityBlockSection {
				_key
				_type
				description
				title
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
					url {
						_type
						url
						title
					}
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
			... on SanityFooter {
				_key
				_type
				cta {
					_type
					title
					url
				}
				sections {
					... on SanityFooterContact {
						_key
						_type
						_rawOption
						option {
							... on SanityContactAddress {
								_key
								_type
								address
								title
							}
							... on SanityContactEmail {
								_key
								_type
								email
								title
							}
							... on SanityContactPhone {
								_key
								_type
								phone
								prefix
								title
							}
						}
					}
					... on SanityFooterCopyright {
						_key
						_type
						copy
					}
					... on SanityFooterSitemap {
						_key
						_type
						enable
					}
					... on SanityFooterSocialLinks {
						_key
						_type
						title
						links {
							_key
							_type
							title
							url
						}
					}
				}
			}
		}
	}
`;
