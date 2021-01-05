import { FaPen as icon } from 'react-icons/fa';

export default {
	name: 'post',
	title: 'Post',
	type: 'document',
	icon,
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'mainImage',
		},
		{
			name: 'categories',
			title: 'Categories',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'postCategory' } }],
		},
		{
			name: 'publish',
			title: 'Published',
			type: 'boolean',
			description:
				'Set to published when the post is ready to be visible on the front-end.',
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string',
			options: {
				maxLength: 280,
			},
		},
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'mainImage',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
