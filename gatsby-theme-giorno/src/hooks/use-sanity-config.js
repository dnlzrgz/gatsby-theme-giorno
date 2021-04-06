import { graphql, useStaticQuery } from 'gatsby';

const useSanityConfig = () => {
	const data = useStaticQuery(graphql`
		query {
			config: sanityConfig {
				global: globalConfig {
					title
					description {
						_rawChildren
					}
					image {
						asset {
							gatsbyImageData(formats: [AUTO])
						}
					}
					siteURL
					twitterUsername
					navbar
				}
				blog: blogConfig {
					enable
				}
				footer: footerConfig {
					copyright
					sitemap
				}
			}
		}
	`);

	return { ...data.config };
};

export default useSanityConfig;
