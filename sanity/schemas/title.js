export default {
	name: 'title',
	title: 'Title',
	type: 'string',
	description: 'Section text title.',
	validate: (Rule) => Rule.required(),
};
