import React from 'react';
import Img from 'gatsby-image';

const HeroImage = ({ fluidAsset }) => (
	<Img
		fluid={fluidAsset}
		className="h-screen w-full object-cover absolute inset-0"
		fadeIn
	/>
);

export default HeroImage;
