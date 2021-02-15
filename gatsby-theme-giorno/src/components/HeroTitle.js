import React from 'react';

const HeroTitle = ({ white, children }) => {
	return <h1 className="text-6xl md:text-8xl text-center mb-4">{children}</h1>;
};

export default HeroTitle;
