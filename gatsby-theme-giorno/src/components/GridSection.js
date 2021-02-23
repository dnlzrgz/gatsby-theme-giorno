import React from 'react';

import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import GridItem from './GridItem';

const GridSection = ({ module }) => {
	const { title, description, items } = module;

	return (
		<Section>
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24">
				<SectionHeader>
					<SectionTitle>{title}</SectionTitle>
					{description ? (
						<SectionDescription>{description}</SectionDescription>
					) : null}
				</SectionHeader>
				<main className="flex items-center justify-center py-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
						{items.map((item) => (
							<GridItem
								key={item._key}
								title={item.title}
								content={item.content}
							/>
						))}
					</div>
				</main>
			</div>
		</Section>
	);
};

export default GridSection;
