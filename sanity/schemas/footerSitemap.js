import { BiSitemap as icon } from 'react-icons/bi';

export default {
	name: 'footerSitemap',
	title: 'Sitemap',
	type: 'object',
	icon,
	fields: [
		{
			name: 'enable',
			title: 'Enable',
			type: 'boolean',
			description:
				'Displays a footer section with links to all the main public pages of your site.',
		},
	],
	preview: {
		prepare() {
			return {
				title: `Sitemap`,
			};
		},
	},
};
