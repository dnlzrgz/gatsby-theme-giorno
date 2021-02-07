import { BiCopyright as icon } from 'react-icons/bi';

export default {
	name: 'footerCopyright',
	title: 'Copyright',
	type: 'object',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'copy',
			title: 'Copyright message',
			type: 'string',
			validation: (Rule) => Rule.required(),
			// TODO:
			description: '',
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
