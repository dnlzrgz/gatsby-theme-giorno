import { CgDockBottom as icon } from 'react-icons/cg';

export default {
	name: 'footer',
	title: 'Footer',
	type: 'object',
	icon,
	description: 'A footer section with optional components.',
	fields: [
		{
			name: 'sections',
			title: 'Footer sections',
			type: 'array',
			of: [
				{ type: 'footerContact' },
				{ type: 'footerCopyright' },
				{ type: 'cta' },
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
