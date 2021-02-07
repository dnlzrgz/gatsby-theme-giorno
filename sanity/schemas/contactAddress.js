import { BiLocationPlus as icon } from 'react-icons/bi';

export default {
	name: 'contactAddress',
	title: 'Contact address',
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
			name: 'address',
			title: 'Address',
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
