import { BsLink45Deg as icon } from 'react-icons/bs';

export default {
	name: 'footerSocialLinks',
	title: 'Social links',
	type: 'object',
	icon,
	fields: [
		{
			name: 'title',
			type: 'title',
		},
		{
			name: 'links',
			title: 'Social links',
			type: 'array',
			of: [
				{
					type: 'externalLink',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
};
