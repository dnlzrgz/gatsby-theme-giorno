export default {
	name: 'blogConfig',
	title: 'Blog',
	type: 'object',
	description: 'Blog related configuration.',
	fields: [
		{
			name: 'enable',
			title: 'Blog page',
			type: 'boolean',
			// FIXME: improve description
			description:
				'Adds a \\blog page with pagination (\\blog\\1, \\blog\\2,...). If there are no posts the will be created but will redirect to page \\404.',
		},
		{
			name: 'pagination',
			title: 'Posts per page',
			type: 'number',
			description: 'Number of posts per page if the blog page is enabled.',
			validation: (Rule) => Rule.min(1).integer().positive().required(),
		},
	],
};
