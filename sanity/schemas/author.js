import { FaUser as icon } from 'react-icons/fa';

export default {
	name: 'author',
	title: 'Author',
	type: 'document',
	icon,
	// TODO:
	description: '',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			// TODO: use blockContent instead
			name: 'bio',
			title: 'Bio',
			type: 'array',
			of: [
				{
					title: 'Block',
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
					lists: [],
				},
			],
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'externalLinks',
			title: 'External links',
			type: 'array',
			of: [{ type: 'externalLink' }],
		},
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
		},
	},
};
