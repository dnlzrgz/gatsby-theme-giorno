import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ContentBlock from './ContentBlock';

const TextSection = ({ module }) => {
	const { title, description, _rawContent: content } = module;

	return (
		<Section>
			<header>
				<SectionTitle>{title}</SectionTitle>
				{description && <SectionDescription>{description}</SectionDescription>}
			</header>
			<main className="flex flex-col items-center justify-items-center">
				<ContentBlock content={content} />
			</main>
		</Section>
	);
};

TextSection.propTypes = {
	module: PropTypes.object.isRequired,
};

export default TextSection;
