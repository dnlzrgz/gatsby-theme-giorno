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
			title: 'URL',
			type: 'url',
			description: 'Relative URL to internal page.',
		},
	],
};
