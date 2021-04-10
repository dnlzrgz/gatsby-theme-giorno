import React from 'react';
import PropTypes from 'prop-types';

const SectionDescription = ({ children }) => {
	return <p className="text-lg md:text-2xl">{children}</p>;
};

SectionDescription.propTypes = {
	children: PropTypes.node.isRequired,
};

export default SectionDescription;
