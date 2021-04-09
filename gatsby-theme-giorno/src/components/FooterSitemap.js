import React from 'react';
import { Link } from 'gatsby';

import FooterSection from './FooterSection';
import FooterSectionTitle from './FooterSectionTitle';
import FooterSectionMain from './FooterSectionMain';
import useAllPages from '../hooks/use-all-pages';
import useSanityConfig from '../hooks/use-sanity-config';

const FooterSitemap = () => {
	const pages = useAllPages();
	const {
		blog: { enable },
	} = useSanityConfig();

	if (!pages.length) return null;
	return (
		<FooterSection>
			<header className="text-lg font-semibold">
				<Link to="/sitemap.xml">
					<FooterSectionTitle title="Sitemap" />
				</Link>
			</header>
			<FooterSectionMain>
				<Link key={'home'} to="/">
					Home
				</Link>
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
			</FooterSectionMain>
		</FooterSection>
	);
};

export default FooterSitemap;
