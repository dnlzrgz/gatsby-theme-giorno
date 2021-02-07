import { FiMail as icon } from 'react-icons/fi';

export default {
	name: 'contactEmail',
	title: 'Email',
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
