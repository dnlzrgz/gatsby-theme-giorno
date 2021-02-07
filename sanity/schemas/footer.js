import { CgDockBottom as icon } from 'react-icons/cg';

export default {
	name: 'footer',
	title: 'Footer',
	type: 'object',
	icon,
	// TODO:
	description: '',
	// TODO: Add preview
	fields: [
		{
			name: 'sections',
			title: 'Footer sections',
			type: 'array',
			// TODO:
			description: '',
			of: [
				{ type: 'footerContact' },
				{ type: 'footerCopyright' },
				{ type: 'footerCTA' },
				{ type: 'footerSitemap' },
				{ type: 'footerSocialLinks' },
			],
		},
	],
	preview: {
		prepare() {
			return {
				title: `Footer`,
			};
		},
	},
};
