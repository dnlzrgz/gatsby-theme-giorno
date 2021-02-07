import { BiPhone as icon } from 'react-icons/bi';

export default {
	name: 'contactPhone',
	title: 'Phone number',
	type: 'object',
	icon,
	description: 'An optional contact phone number.',
	fields: [
		{
			name: 'title',
			type: 'title',
			description: 'Contact option title (for example: My phone number)',
		},
		{
			name: 'prefix',
			title: 'Country prefix',
			type: 'string',
			description:
				'Your country calling code or phone prefix (for example: +34)',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'phone',
			title: 'Phone number',
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
