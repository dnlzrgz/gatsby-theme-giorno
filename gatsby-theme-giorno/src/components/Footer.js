import React from 'react';

import useSanityConfig from '../hooks/use-sanity-config';
import useSanityExternalLinks from '../hooks/use-sanity-external-links';
import useSanityContactOptions from '../hooks/use-sanity-contact-options';
import FooterSocialLinks from './FooterSocialLinks';
import FooterSitemap from './FooterSitemap';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
	const { copyright, sitemap } = useSanityConfig();
	const links = useSanityExternalLinks();
	const contact = useSanityContactOptions();

	return (
		<footer className="text-white bg-gray-700 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 px-6 md:px-12">
			{links && links.length !== 0 ? <FooterSocialLinks links={links} /> : null}
			{contact && contact.title ? <FooterContact details={contact} /> : null}
			{sitemap ? <FooterSitemap /> : null}
			{copyright ? <FooterCopyright copy={copyright} /> : null}
		</footer>
	);
};

export default Footer;
