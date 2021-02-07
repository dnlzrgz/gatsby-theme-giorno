import { BiSitemap as icon } from 'react-icons/bi';

export default {
	name: 'footerSitemap',
	title: 'Sitemap',
	type: 'object',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'enable',
			title: 'Enable',
			type: 'boolean',
			// TODO:
			description: '',
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
