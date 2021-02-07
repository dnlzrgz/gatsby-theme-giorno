import { BsListUl as icon } from 'react-icons/bs';

// TODO: Add a field to select Netlify forms or other services
export default {
	name: 'form',
	title: 'Form',
	type: 'object',
	icon,
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'name',
			title: 'Form name',
			type: 'string',
			description:
				'Name attribute to reference form data after a form is submitted.',
			validation: (Rule) =>
				Rule.required()
					.lowercase()
					.error('All characters must be in lowercase'),
		},
		{
			name: 'inputs',
			title: 'Inputs',
			type: 'array',
			description: 'Array of inputs to create a custom form.',
			of: [
				{ type: 'input' },
				{ type: 'textarea' },
				{ type: 'submit', validation: (Rule) => Rule.required() },
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `Form - ${title}`,
			};
		},
	},
};
