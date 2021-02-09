import React from 'react';

const FooterSitemap = ({ module }) => {
	const { enable } = module;

	if (!enable) return null;
	return (
		<section>
			<h2>Sitemap</h2>
			{/* TODO: loop over all pages */}
			{/* TODO: add link to sitemap.xml */}
		</section>
	);
};

export default FooterSitemap;
