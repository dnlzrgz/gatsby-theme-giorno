import React from 'react';
import { Link } from 'gatsby';

import useAllPages from '../hooks/use-all-pages';

const FooterSitemap = ({ module }) => {
	const { enable } = module;
	const pages = useAllPages();

	if (!enable) return null;
	return (
		<section>
			<header>
				{/* TODO: Add icon */}
				<Link to="/sitemap.xml">
					<h2>Sitemap</h2>
				</Link>
			</header>
			<main className="flex flex-col">
				{pages.map((page) => (
					<Link key={page.id} to={`/${page.slug.current}`}>
						{page.title}
					</Link>
				))}
			</main>
		</section>
	);
};

export default FooterSitemap;
