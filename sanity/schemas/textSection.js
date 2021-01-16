import { GrDocumentText as icon } from 'react-icons/gr';

export default {
	name: 'textSection',
	title: 'Text Section',
	type: 'object',
	icon,
	description:
		'Adds a full-width section with a title, a text description and a block of text.',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			description: 'Section title',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
			description: 'Section description.',
		},
		{
			name: 'content',
			title: 'Section content',
			type: 'blockContent',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		prepare() {
			return {
				title: `Text Section`,
			};
		},
	},
};
