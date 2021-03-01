import { BsTextLeft as icon } from 'react-icons/bs';

export default {
	name: 'textarea',
	title: 'Textarea',
	type: 'object',
	icon,
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
			description: 'Textarea name.',
		},
		{
			name: 'label',
			type: 'string',
			title: 'Label',
			description: 'Textarea label.',
		},
		{
			name: 'minLength',
			title: 'Minimum number of characters required',
			type: 'number',
			description:
				'Minimum number of characters required that the user should enter.',
			validation: (Rule) => Rule.integer().error("Value can't have decimal"),
		},
		{
			name: 'maxLength',
			title: 'Maximum number of characters allowed',
			type: 'number',
			description: 'Maximum number of characters that the user can enter.',
			validation: (Rule) => Rule.integer().error("Value can't have decimal"),
		},
		{
			name: 'required',
			title: 'Required',
			type: 'boolean',
			description:
				'Select if textarea is required before allowing the form to be submitted.',
		},
	],
	preview: {
		select: {
			title: 'name',
		},
		prepare({ title }) {
			return {
				title: `Textarea - ${title}`,
			};
		},
	},
};
