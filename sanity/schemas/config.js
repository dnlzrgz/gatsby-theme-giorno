export default {
	name: 'config',
	title: 'Config',
	type: 'document',
	__experimental_actions: ['create', 'update', 'publish'],
	fields: [
		{
			name: 'blogConfig',
			type: 'blogConfig',
		},
		{
			name: 'projectsConfig',
			type: 'projectsConfig',
		},
		{
			name: 'footerConfig',
			type: 'footerConfig',
		},
	],
	preview: {
		prepare() {
			return {
				title: `Config`,
			};
		},
	},
};
