import React from 'react';

import HeroTitle from './HeroTitle';
import HeroSubtitle from './HeroSubtitle';
import CTA from './CTA';

const BlankHero = ({ module }) => {
	const { title, subtitle, cta } = module;

	return (
		<section className="h-screen grid grid-rows-1 grid-cols-1 items-center">
			<header className="text-gray-900 z-10" style={{ gridArea: '1/1' }}>
				<HeroTitle>{title}</HeroTitle>
				{subtitle ? <HeroSubtitle>{subtitle}</HeroSubtitle> : null}
				{cta && cta.title ? <CTA title={cta.title} url={cta.url} /> : null}
			</header>
		</section>
	);
};

export default BlankHero;
