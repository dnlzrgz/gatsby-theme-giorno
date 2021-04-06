export default {
	name: 'blogConfig',
	title: 'Blog',
	type: 'object',
	description: 'Blog configuration.',
	fields: [
		{
			name: 'enable',
			title: 'Blog page',
			type: 'boolean',
			description:
				'If there is at least one post marked as public it generates a blog page with pagination included.',
		},
		{
			name: 'pagination',
			title: 'Posts per page',
			type: 'number',
			description: 'Number of posts per page.',
			validation: (Rule) => Rule.min(1).integer().positive().required(),
		},
	],
};
