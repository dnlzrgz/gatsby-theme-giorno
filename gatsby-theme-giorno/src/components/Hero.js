import React from 'react';

import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import CTA from './cta';

const Hero = ({ module }) => {
	return (
		<div className="flex relative items-center">
			<HeroImage fluidAsset={module.image.asset.fluid} />
			<div className="absolute w-full px-7">
				<HeroContent title={module.title} subtitle={module.subtitle} />
				{module.cta && module.cta.title && module.cta.url ? (
					<CTA title={module.cta.title} url={module.cta.url} />
				) : null}
			</div>
		</div>
	);
};

export default Hero;
