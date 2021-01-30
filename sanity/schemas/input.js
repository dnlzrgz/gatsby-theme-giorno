import { BsCheck as icon } from 'react-icons/bs';

export default {
	name: 'input',
	title: 'Input',
	type: 'object',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'name',
			type: 'string',
			title: 'Name',
			description: 'Input name.',
		},
		{
			name: 'type',
			type: 'string',
			title: 'Input type',
			description:
				'Input type must be one of the following values: "email", "number", "text" or "url".',
		},
		{
			name: 'label',
			type: 'string',
			title: 'Label',
			description: 'Input label.',
		},
		{
			name: 'placeholder',
			type: 'string',
			title: 'Placeholder Text',
			description: 'Input placeholder.',
		},
		{
			name: 'required',
			title: 'Required',
			type: 'boolean',
			description:
				'Select if input is required before allowing the form to be submitted.',
		},
	],
	preview: {
		select: {
			title: 'name',
			type: 'type',
		},
		prepare({ title, type }) {
			return {
				title: `Input of type ${type} - ${title}`,
			};
		},
	},
};
