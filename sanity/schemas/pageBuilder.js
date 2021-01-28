export default {
	name: 'pageBuilder',
	title: 'Page builder',
	type: 'array',
	of: [
		{ type: 'hero', validation: (Rule) => Rule.unique() },
		{ type: 'textSection' },
		{ type: 'gridSection' },
		{ type: 'form' },
	],
};
