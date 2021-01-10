import React from 'react';
const HeroContent = ({ title, subtitle }) => {
	return (
		<div className="mt-9 mb-9">
			<h1 className="text-6xl text-center mb-4">{title}</h1>
			{subtitle && <p className="text-center">{subtitle}</p>}
		</div>
	);
};

export default HeroContent;
