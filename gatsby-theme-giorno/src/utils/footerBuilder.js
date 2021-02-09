import React from 'react';

import FooterSocialLinks from '../components/FooterSocialLinks';
import FooterSitemap from '../components/FooterSitemap';
import FooterContact from '../components/FooterContact';
import FooterCopyright from '../components/FooterCopyright';

const footerBuilder = (sections) => {
	return sections.map((section) => {
		switch (section._type) {
			case 'footerSocialLinks':
				return <FooterSocialLinks key={section._key} section={section} />;
			case 'footerSitemap':
				return <FooterSitemap key={section._key} section={section} />;
			case 'footerContact':
				return <FooterContact key={section._key} section={section} />;
			case 'footerCopyright':
				return <FooterCopyright key={section._key} section={section} />;
			default:
				return null;
		}
	});
};

export default footerBuilder;
