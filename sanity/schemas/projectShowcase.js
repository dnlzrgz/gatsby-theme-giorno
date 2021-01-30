import { BsKanbanFill as icon } from 'react-icons/bs';

export default {
	name: 'projectShowcase',
	title: 'Project showcase',
	type: 'object',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'title',
			description: '',
		},
		{
			name: 'subtitle',
			title: 'Subtitle',
			type: 'description',
			description: 'Page or site description.',
		},
		{
			name: 'projects',
			title: 'Projects',
			type: 'array',
			description: '',
			of: [
				{
					name: 'project',
					title: 'Project',
					type: 'reference',
					to: { type: 'project' },
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title: `Project showcase - ${title}`,
			};
		},
	},
};
