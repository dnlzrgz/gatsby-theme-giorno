import { graphql, useStaticQuery } from 'gatsby';

const useSanityConfig = () => {
	// TODO: refactor query into a GraphQL fragment
	const data = useStaticQuery(graphql`
		query {
			config: sanityConfig {
				global: globalConfig {
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
