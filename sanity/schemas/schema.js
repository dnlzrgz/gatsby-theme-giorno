import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import author from './author';
import blockContent from './blockContent';
import externalLink from './externalLink';
import mainImage from './mainImage';
import page from './page';
import post from './post';
import postCategory from './postCategory';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		author,
		blockContent,
		externalLink,
		mainImage,
		page,
		post,
		postCategory,
	]),
});
