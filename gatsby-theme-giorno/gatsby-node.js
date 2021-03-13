const { paginate } = require('gatsby-awesome-pagination');

const createPagesFromSanity = async (graphql, actions, reporter) => {
	const { createPage } = actions;
	const res = await graphql(`
		{
			pages: allSanityPage(filter: { public: { eq: true } }) {
				edges {
					node {
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (res.errors) {
		reporter.panicOnBuild(
			`Error while running GraphQL query on createPagesFromSanity`
		);
		return;
	}

	const pages = (res.data.pages || {}).edges || [];
	pages.forEach((edge) => {
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

const createBlogPages = async (graphql, actions, reporter) => {
	const { createPage } = actions;
	const res = await graphql(`
		{
			config: sanityConfig {
				blog: blogConfig {
					enable
					pagination
				}
			}
			posts: allSanityPost(filter: { public: { eq: true } }) {
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

	if (res.errors) {
		reporter.panicOnBuild(
			`Error while running GraphQL query on createBlogPages`
		);
		return;
	}

	if (!res.data.config.blog.enable) return;

	const posts = (res.data.posts || {}).edges || [];
	const itemsPerPage = res.data.config.blog.pagination;

	if (!posts.length) {
		reporter.panicOnBuild(`Error while creating blog pages: no posts found`);
		return;
	}

	paginate({
		createPage,
		items: posts,
		itemsPerPage,
		pathPrefix: '/blog',
		component: require.resolve('./src/templates/blog.js'),
	});
};

const createPostPagesFromSanity = async (graphql, actions, reporter) => {
	const { createPage } = actions;
	const res = await graphql(`
		{
			config: sanityConfig {
				blog: blogConfig {
					enable
				}
			}
			posts: allSanityPost(
				filter: { public: { eq: true } }
				sort: { fields: publishedAt, order: ASC }
			) {
				edges {
					node {
						slug {
							current
						}
					}
				}
			}
		}
	`);

	if (res.errors) {
		reporter.panicOnBuild(
			`Error while running GraphQL query on createPostPagesFromSanity`
		);
		return;
	}

	if (!res.data.config.blog.enable) return;

	const pages = (res.data.posts || {}).edges || [];
	pages.forEach((edge) => {
		const { current } = edge.node.slug;
		const path = `/blog/${current}`;

		createPage({
			path,
			component: require.resolve('./src/templates/post.js'),
			context: { slug: current },
		});
	});
};

exports.createPages = async ({ graphql, actions, reporter }) => {
	await Promise.all([
		createPagesFromSanity(graphql, actions, reporter),
		createBlogPages(graphql, actions, reporter),
		createPostPagesFromSanity(graphql, actions, reporter),
	]);
};
