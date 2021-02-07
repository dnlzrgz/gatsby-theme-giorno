import { BsCursorFill as icon } from 'react-icons/bs';

export default {
	name: 'footerCTA',
	title: 'CTA',
	type: 'object',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'title',
			title: 'CTA section title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'url',
			title: 'URL',
			type: 'string',
			description: 'CTA target absolute URL',
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `CTA: ${title}`,
			};
		},
	},
};
