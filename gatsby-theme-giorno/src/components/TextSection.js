import React from 'react';

import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ContentBlock from './ContentBlock';

const TextSection = ({ module }) => {
	const { title, description, content } = module;
	return (
		<section className="h-screen">
			<header>
				<SectionTitle>{title}</SectionTitle>
				{description && <SectionDescription>{description}</SectionDescription>}
			</header>
			<ContentBlock content={content} />
		</section>
	);
};

export default TextSection;
