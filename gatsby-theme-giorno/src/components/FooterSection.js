import React from 'react';

const FooterSection = ({ children }) => {
	return (
		<section className="flex flex-col sm:items-center">
			<div>{children}</div>
		</section>
	);
};

export default FooterSection;
