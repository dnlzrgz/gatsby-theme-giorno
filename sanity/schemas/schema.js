import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import author from './author';
import blankHero from './blankHero';
import blockContent from './blockContent';
import blockSection from './blockSection';
import config from './config';
import contact from './contact';
import contactAddress from './contactAddress';
import contactEmail from './contactEmail';
import contactPhone from './contactPhone';
import cta from './cta';
import description from './description';
import externalLink from './externalLink';
import externalLinks from './externalLinks';
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
import title from './title';

export default createSchema({
	name: 'default',
	types: schemaTypes.concat([
		author,
		blankHero,
		blockContent,
		blockSection,
		config,
		contact,
		contactAddress,
		contactEmail,
		contactPhone,
		cta,
		description,
		externalLink,
		externalLinks,
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
		title,
	]),
});
