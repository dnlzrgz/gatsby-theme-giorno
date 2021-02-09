import React from 'react';

import footerContactBuilder from '../utils/footerContactBuilder';

const FooterContact = ({ module }) => {
	const { option: options } = module;

	return (
		<section>
			<header>
				<h2>Contact info</h2>
			</header>
			<main>{footerContactBuilder(options)}</main>
		</section>
	);
};

export default FooterContact;
