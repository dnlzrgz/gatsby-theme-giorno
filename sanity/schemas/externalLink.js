export default {
	name: 'externalLink',
	title: 'External link',
	type: 'object',
	description: 'A link to an external site.',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			required: true,
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'url',
			title: 'URL',
			type: 'url',
			validation: (Rule) =>
				Rule.required().uri({
					scheme: ['http', 'https'],
				}),
		},
	],
};
