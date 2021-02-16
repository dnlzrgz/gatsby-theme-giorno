import { BsInfoCircle as icon } from 'react-icons/bs';

// TODO: fix icon on dashboard
export default {
	name: 'config',
	title: 'Config',
	type: 'document',
	icon,
	__experimental_actions: ['create', 'update', 'publish'],
	fields: [
		{
			name: 'copyright',
			title: 'Copyright message',
			type: 'string',
			description: 'Copyright message.',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'sitemap',
			title: 'Enable sitemap',
			type: 'boolean',
			description: 'Displays a sitemap on the footer of every page.',
		},
	],
	preview: {
		prepare() {
			return {
				title: `Config`,
			};
		},
	},
};
