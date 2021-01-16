import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import author from './author';
import blockContent from './blockContent';
import cta from './cta';
import externalLink from './externalLink';
import hero from './hero';
import page from './page';
import pageBuilder from './pageBuilder';
import post from './post';
import postCategory from './postCategory';
import published from './published';
import textSection from './textSection';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		author,
		blockContent,
		cta,
		externalLink,
		hero,
		page,
		pageBuilder,
		post,
		postCategory,
		published,
		textSection,
	]),
});
