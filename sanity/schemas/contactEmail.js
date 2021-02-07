import { FiMail as icon } from 'react-icons/fi';

export default {
	name: 'contactEmail',
	title: 'Email',
	type: 'object',
	icon,
	description: 'An optional contact email.',
	fields: [
		{
			name: 'title',
			type: 'title',
			description: 'Contact option title (for example: My email).',
		},
		{
			name: 'email',
			title: 'Email',
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
