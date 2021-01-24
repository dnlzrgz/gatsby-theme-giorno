import React from 'react';

import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import GridItem from './GridItem';

const GridSection = ({ module }) => {
	const { title, description, items } = module;

	return (
		<section className="h-screen">
			<header>
				<SectionTitle>{title}</SectionTitle>
				{description && <SectionDescription>{description}</SectionDescription>}
			</header>
			<main className="grid grid-cols-2 gap-3">
				{items.map((item) => (
					<GridItem key={item._key} title={item.title} content={item.content} />
				))}
			</main>
		</section>
	);
};

export default GridSection;
