import React from 'react';

import footerContactBuilder from '../utils/footerContactBuilder';

const FooterContact = ({ details }) => {
	const { title, description, option } = details;
	return (
		<section>
			<header className="text-lg font-semibold">
				<h2>{title}</h2>
				{description ? <p>{description}</p> : null}
			</header>
			<main>{footerContactBuilder(option)}</main>
		</section>
	);
};

export default FooterContact;
