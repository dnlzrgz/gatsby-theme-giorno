export default {
	name: 'title',
	title: 'Title',
	type: 'string',
	description: 'Section title.',
	validate: (Rule) => Rule.required(),
};
