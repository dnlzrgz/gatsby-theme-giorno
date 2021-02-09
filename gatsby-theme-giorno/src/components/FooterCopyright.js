import React from 'react';

const FooterCopyright = ({ section }) => {
	return (
		<section>
			<main>
				<p>{section.copy}</p>
			</main>
		</section>
	);
};

export default FooterCopyright;
