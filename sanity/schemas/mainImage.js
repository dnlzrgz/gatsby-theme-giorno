export default {
	name: 'mainImage',
	title: 'Image',
	type: 'image',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'caption',
			title: 'Caption',
			type: 'string',
		},
		{
			name: 'attribution',
			title: 'Attribution',
			type: 'string',
		},
	],
	options: {
		hotspot: true,
	},
};
