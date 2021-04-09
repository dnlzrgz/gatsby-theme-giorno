import React from 'react';

import FooterSection from './FooterSection';
import FooterSectionTitle from './FooterSectionTitle';
import FooterSectionMain from './FooterSectionMain';
import footerContactBuilder from '../utils/footerContactBuilder';

const FooterContact = ({ details }) => {
	const { title, description, options } = details;

	return (
		<FooterSection>
			<header className="text-lg font-semibold">
				<FooterSectionTitle title={title} />
				{description ? <p>{description}</p> : null}
			</header>
			<FooterSectionMain>{footerContactBuilder(options)}</FooterSectionMain>
		</FooterSection>
	);
};

export default FooterContact;
