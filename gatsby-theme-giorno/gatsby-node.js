const createPagesFromSanity = async (graphql, actions) => {
	const { createPage } = actions;
	const res = await graphql(`
		{
			pages: allSanityPage {
				edges {
					node {
						public
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (res.errors) throw res.errors;

	const pageEdges = (res.data.pages || {}).edges || [];
	pageEdges
		.filter((edge) => !!edge.node.public)
		.forEach((edge) => {
			const { current } = edge.node.slug;

			if (current === 'index') return;
			const path = `/${current}`;

			createPage({
				path,
				component: require.resolve('./src/templates/page.js'),
				context: { slug: current },
			});
		});
};

const createPostsFromSanity = async (graphql, actions) => {
	const { createPage } = actions;
	const res = await graphql(`
		{
			posts: allSanityPost {
				edges {
					node {
						public
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (res.errors) throw res.errors;

	const pageEdges = (res.data.posts || {}).edges || [];
	pageEdges
		.filter((edge) => !!edge.node.public)
		.forEach((edge) => {
			const { current } = edge.node.slug;
			const path = `/blog/${current}`;

			createPage({
				path,
				component: require.resolve('./src/templates/post.js'),
				context: { slug: current },
			});
		});
};

exports.createPages = async ({ graphql, actions }) => {
	await createPagesFromSanity(graphql, actions);
	await createPostsFromSanity(graphql, actions);
};
