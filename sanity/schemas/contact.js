export default {
	name: 'contact',
	title: 'Contact',
	type: 'document',
	__experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'description',
			type: 'string',
			title: 'Description',
			description:
				'Optional information about how or when people can contact with you.',
		},
		{
			name: 'option',
			title: 'Contact options',
			type: 'array',
			of: [
				{ type: 'contactEmail' },
				{ type: 'contactPhone' },
				{ type: 'contactAddress' },
			],
		},
	],
	preview: {
		prepare() {
			return {
				title: `Contact info`,
			};
		},
	},
};
