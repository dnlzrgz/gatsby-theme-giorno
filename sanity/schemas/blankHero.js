import { BsCardImage as icon } from 'react-icons/bs';

export default {
	name: 'blankHero',
	title: 'Blank Hero',
	type: 'object',
	icon,
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
	],
	preview: {
		select: {
			title: 'title',
			cta: 'cta',
		},
		prepare({ title, cta }) {
			return {
				title: `Blank hero ${cta?.title ? 'with CTA' : ''} - ${title}`,
			};
		},
	},
};
