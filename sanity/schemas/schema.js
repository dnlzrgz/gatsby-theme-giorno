import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import author from './author';
import blockContent from './blockContent';
import cta from './cta';
import description from './description';
import externalLink from './externalLink';
import gridItem from './gridItem';
import gridSection from './gridSection';
import hero from './hero';
import internalLink from './internalLink';
import page from './page';
import pageBuilder from './pageBuilder';
import post from './post';
import postCategory from './postCategory';
import published from './published';
import textSection from './textSection';
import title from './title';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		author,
		blockContent,
		cta,
		description,
		externalLink,
		gridItem,
		gridSection,
		hero,
		internalLink,
		page,
		pageBuilder,
		post,
		postCategory,
		published,
		textSection,
		title,
	]),
});
