import React from 'react';
import PropTypes from 'prop-types';

import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import HeroImage from './HeroImage';
import CTA from './CTA';

const Hero = ({ module }) => {
	const { title, subtitle, whiteText, image, cta } = module;

	return (
		<section className="grid grid-rows-1 grid-cols-1 items-center">
			<header
				className={`${whiteText ? 'text-white' : 'text-gray-900'} z-10`}
				style={{ gridArea: '1/1' }}
			>
				<HeroTitle>{title}</HeroTitle>
				{subtitle ? <HeroSubtitle>{subtitle}</HeroSubtitle> : null}
				{cta && cta.title ? <CTA title={cta.title} url={cta.url} /> : null}
			</header>

			<main style={{ gridArea: '1/1' }}>
				<HeroImage asset={image.asset} />
			</main>
		</section>
	);
};

Hero.propTypes = {
	module: PropTypes.object.isRequired,
};

export default Hero;
