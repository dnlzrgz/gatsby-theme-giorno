import { graphql, useStaticQuery } from 'gatsby';

const useAllPages = () => {
	const data = useStaticQuery(graphql`
		query {
			pages: allSanityPage(
				filter: { public: { eq: true }, slug: { current: { ne: "index" } } }
			) {
				nodes {
					id
					title
					public
					slug {
						current
					}
				}
			}
		}
	`);

	return data.pages.nodes;
};

export default useAllPages;
