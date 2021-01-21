import { BsCardImage as icon } from 'react-icons/bs';

export default {
	name: 'hero',
	title: 'Hero',
	type: 'object',
	icon,
	description:
		'Adds a full-width oversized banner at the top of the page with a title.',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'title',
			description: 'Site or project name.',
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'description',
			description: 'Page or site description.',
		},
		{
			name: 'cta',
			title: 'CTA',
			type: 'cta',
			description: 'Call-To-Action button.',
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			validation: (Rule) => Rule.required(),
			options: {
				hotspot: true,
			},
		},
	],
	preview: {
		select: {
			title: 'title',
			media: 'image',
			cta: 'cta',
		},
		prepare({ title, media, cta }) {
			return {
				title: `Hero ${cta?.title ? 'with CTA' : ''} - ${title}`,
				media,
			};
		},
	},
};
