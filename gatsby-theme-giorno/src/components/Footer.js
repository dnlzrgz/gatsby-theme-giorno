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
		<footer className="text-white grid bg-gray-700 py-9 px-6">
			{links && links.length !== 0 ? <FooterSocialLinks links={links} /> : null}
			{contact && contact.title ? <FooterContact details={contact} /> : null}
			{sitemap ? <FooterSitemap /> : null}
			{copyright ? <FooterCopyright copy={copyright} /> : null}
		</footer>
	);
};

export default Footer;
