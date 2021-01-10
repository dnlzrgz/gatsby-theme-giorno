const createPagesFromSanity = async (graphql, actions, reporter) => {
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

exports.createPages = async ({ graphql, actions, reporter }) => {
	await createPagesFromSanity(graphql, actions, reporter);
};
