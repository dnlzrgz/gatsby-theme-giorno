import React from 'react';

const Section = ({ children }) => {
	return (
		<section className="h-screen grid items-center py-16 px-6 md:px-24">
			{children}
		</section>
	);
};

export default Section;
