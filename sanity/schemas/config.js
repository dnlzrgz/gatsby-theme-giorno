export default {
	name: 'config',
	title: 'Config',
	type: 'document',
	__experimental_actions: ['create', 'update', 'publish'],
	fields: [
		{
			name: 'blogPage',
			title: 'Blog page',
			type: 'boolean',
			description:
				'Automatically creates a page with all public posts, if there are no posts published yet the page will not be created.',
		},
		{
			name: 'projectsPage',
			title: 'Projects page',
			type: 'boolean',
			description:
				'Automatically creates a page with all the projects listed, if there are no projects the page will not be created.',
		},
		{
			name: 'sitemap',
			title: 'Enable sitemap',
			type: 'boolean',
			description: 'Displays a sitemap on the footer of every page.',
		},
		{
			name: 'copyright',
			title: 'Copyright message',
			type: 'string',
			description: 'Copyright message.',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		prepare() {
			return {
				title: `Config`,
			};
		},
	},
};
