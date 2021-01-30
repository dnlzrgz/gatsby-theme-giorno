export default {
	name: 'internalLink',
	title: 'Internal link',
	type: 'object',
	// TODO:
	description: '',
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
