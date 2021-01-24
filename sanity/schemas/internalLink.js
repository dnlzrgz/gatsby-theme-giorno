export default {
	name: 'internalLink',
	title: 'Internal link',
	type: 'object',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Internal link title',
		},
		{
			name: 'href',
			title: 'Relative path',
			type: 'string',
			description: 'Relative path to internal page.',
		},
	],
};
