import { BsFilePost as icon } from 'react-icons/bs';

export default {
	name: 'textSection',
	title: 'Text Section',
	type: 'object',
	icon,
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
