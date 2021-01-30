export default {
	name: 'gridItem',
	title: 'Grid Item',
	type: 'object',
	// TODO:
	description: '',
	fields: [
		{
			name: 'title',
			type: 'title',
			description: 'Item text title.',
		},
		{
			name: 'content',
			type: 'description',
			description: 'Item text description.',
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title,
			};
		},
	},
};
