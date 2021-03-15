import React from 'react';
import { Link } from 'gatsby';

import useAllPages from '../hooks/use-all-pages';
import useSanityConfig from '../hooks/use-sanity-config';

const FooterSitemap = () => {
	const pages = useAllPages();
	const {
		blog: { enable },
	} = useSanityConfig();

	if (!pages.length) return null;
	return (
		<section>
			<header className="text-lg font-semibold">
				<Link to="/sitemap.xml">
					<h2>Sitemap</h2>
				</Link>
			</header>
			<main className="flex flex-col">
				{enable ? (
					<Link key={'blog'} to="/blog">
						Blog
					</Link>
				) : null}
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
