export default {
	name: 'blockContent',
	title: 'Rich text',
	type: 'array',
	description: 'Rich text block with references to other documents.',
	of: [
		{
			title: 'Block',
			type: 'block',
			styles: [
				{ title: 'Normal', value: 'normal' },
				{ title: 'H1', value: 'h1' },
				{ title: 'H2', value: 'h2' },
				{ title: 'H3', value: 'h3' },
				{ title: 'H4', value: 'h4' },
				{ title: 'Quote', value: 'blockquote' },
			],
			lists: [{ title: 'Bullet', value: 'bullet' }],
			marks: {
				decorators: [
					{
						title: 'Strong',
						value: 'strong',
					},
					{
						title: 'Emphasis',
						value: 'em',
					},
				],
				annotations: [
					{
						title: 'URL',
						name: 'link',
						type: 'object',
						fields: [{ title: 'URL', name: 'href', type: 'url' }],
					},
				],
			},
		},
	],
};
