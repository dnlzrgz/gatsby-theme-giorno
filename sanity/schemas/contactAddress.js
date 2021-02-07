import { BiLocationPlus as icon } from 'react-icons/bi';

export default {
	name: 'contactAddress',
	title: 'Contact address',
	type: 'object',
	icon,
	description: 'An optional physical address.',
	fields: [
		{
			name: 'title',
			type: 'title',
			description: 'Contact option title (for example: My address).',
		},
		{
			name: 'address',
			title: 'Address',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
};
