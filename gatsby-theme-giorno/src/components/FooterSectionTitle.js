import React from 'react';
import PropTypes from 'prop-types';

const FooterSectionTitle = ({ title }) => {
	return <h2 className="text-lg font-semibold tracking-wide mb-1">{title}</h2>;
};

FooterSectionTitle.propTypes = {
	title: PropTypes.string.isRequired,
};

export default FooterSectionTitle;
