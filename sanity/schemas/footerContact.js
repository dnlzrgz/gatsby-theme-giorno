import { BsInfoCircle as icon } from 'react-icons/bs';

export default {
	name: 'footerContact',
	title: 'Contact',
	type: 'object',
	icon,
	fields: [
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
