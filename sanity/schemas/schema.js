import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document schemas
import author from './author';
import blockContent from './blockContent';
import cta from './cta';
import description from './description';
import externalLink from './externalLink';
import form from './form';
import gridItem from './gridItem';
import gridSection from './gridSection';
import hero from './hero';
import input from './input';
import internalLink from './internalLink';
import page from './page';
import pageBuilder from './pageBuilder';
import post from './post';
import postCategory from './postCategory';
import project from './project';
import projectShowcase from './projectShowcase';
import published from './published';
import submit from './submit';
import textarea from './textarea';
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
		form,
		gridItem,
		gridSection,
		hero,
		input,
		internalLink,
		page,
		pageBuilder,
		post,
		postCategory,
		project,
		projectShowcase,
		published,
		submit,
		textarea,
		textSection,
		title,
	]),
});
