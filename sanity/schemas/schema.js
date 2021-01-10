import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import author from './author';
import cta from './cta';
import externalLink from './externalLink';
import hero from './hero';
import page from './page';
import pageBuilder from './pageBuilder';
import post from './post';
import postCategory from './postCategory';
import published from './published';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		author,
		cta,
		externalLink,
		hero,
		page,
		pageBuilder,
		post,
		postCategory,
		published,
	]),
});
