import { BiCopyright as icon } from 'react-icons/bi';

export default {
	name: 'footerCopyright',
	title: 'Copyright',
	type: 'object',
	icon,
	fields: [
		{
			name: 'copy',
			title: 'Copyright message',
			type: 'string',
			validation: (Rule) => Rule.required(),
			description: 'Copyright message or information.',
		},
	],
	preview: {
		prepare() {
			return {
				title: `Copyright message`,
			};
		},
	},
};
