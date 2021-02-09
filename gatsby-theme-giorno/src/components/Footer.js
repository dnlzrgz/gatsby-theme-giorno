import React from 'react';

import footerBuilder from '../utils/footerBuilder';

const Footer = ({ module }) => {
	// TODO: add alt text for CTAs on Sanity schema
	const {
		cta: { title, url },
		sections,
	} = module;

	return (
		<footer>
			<section>
				<h1>{title}</h1>
				<a href={url}>{url}</a>
			</section>
			{footerBuilder(sections)}
		</footer>
	);
};

export default Footer;
