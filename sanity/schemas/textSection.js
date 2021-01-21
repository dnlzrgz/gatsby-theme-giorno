import { BsFilePost as icon } from 'react-icons/bs';

export default {
	name: 'textSection',
	title: 'Text Section',
	type: 'object',
	icon,
	description:
		'Adds a full-width section with a title, a text description and a block of rich text.',
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'description',
			type: 'description',
		},
		{
			name: 'content',
			title: 'Section content',
			type: 'blockContent',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `Text Section - ${title}`,
			};
		},
	},
};
