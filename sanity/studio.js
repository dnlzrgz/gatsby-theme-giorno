import S from '@sanity/desk-tool/structure-builder';

const hiddenDocTypes = (listItem) =>
	!['contact', 'config'].includes(listItem.getId());

export default () =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Contact information')
				.child(
					S.editor().id('contact').schemaType('contact').documentId('contact')
				),
			S.listItem()
				.title('Global config')
				.child(
					S.editor().id('config').schemaType('config').documentId('config')
				),
			...S.documentTypeListItems().filter(hiddenDocTypes),
		]);
