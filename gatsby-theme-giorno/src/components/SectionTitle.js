import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ children }) => (
	<h2 className="text-4xl md:text-5xl sm:px-6 md:px-0 md:mb-4 leading-snug font-semibold font-serif">
		{children}
	</h2>
);

SectionTitle.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SectionTitle;
