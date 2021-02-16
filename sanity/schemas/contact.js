import { BsInfoCircle as icon } from 'react-icons/bs';

// TODO: fix icon on dashboard
export default {
	name: 'contact',
	title: 'Contact',
	type: 'document',
	icon,
	__experimental_actions: ['create', 'update', 'delete', 'publish'],
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'description',
			type: 'string',
			title: 'Description',
			description:
				'Optional information about how or when people can contact with you.',
		},
		{
			name: 'option',
			title: 'Contact options',
			type: 'array',
			of: [
				{ type: 'contactEmail' },
				{ type: 'contactPhone' },
				{ type: 'contactAddress' },
			],
		},
	],
	preview: {
		prepare() {
			return {
				title: `Contact info`,
			};
		},
	},
};
