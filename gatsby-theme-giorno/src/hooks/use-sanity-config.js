import { graphql, useStaticQuery } from 'gatsby';

const useSanityConfig = () => {
	const data = useStaticQuery(graphql`
		query {
			config: sanityConfig {
				blogPage
				copyright
				sitemap
			}
		}
	`);

	return { ...data.config };
};

export default useSanityConfig;
