import { BsKanbanFill as icon } from 'react-icons/bs';

export default {
	name: 'projectShowcase',
	title: 'Project showcase',
	type: 'object',
	icon,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'title',
			description: '',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'description',
			description: 'Section description.',
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
