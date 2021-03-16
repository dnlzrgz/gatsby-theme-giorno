export default {
	name: 'globalConfig',
	title: 'Global',
	type: 'object',
	description: 'Global related configuration.',
	fields: [
		{
			name: 'title',
			title: 'Site title',
			type: 'string',
			// TODO: improve description
			description: 'Site title.',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'description',
			title: 'Site description',
			type: 'array',
			// TODO: improve description
			description: 'Site description.',
			of: [
				{
					type: 'block',
					styles: [],
					lists: [],
					marks: {
						decorators: [],
						annotations: [],
					},
				},
			],
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'navbar',
			title: 'Navigation bar',
			type: 'boolean',
			// TODO: improve description
			description: 'Enables the navigation bar.',
		},
	],
};
