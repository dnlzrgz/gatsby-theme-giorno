import { BiPhone as icon } from 'react-icons/bi';

export default {
	name: 'contactPhone',
	title: 'Phone number',
	type: 'object',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'prefix',
			title: 'Country prefix',
			type: 'string',
			// TODO:
			description: '',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'phone',
			title: 'Phone number',
			type: 'string',
			// TODO:
			description: '',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
};
