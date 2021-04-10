import React from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

const CTA = ({ title, url }) => {
	const navigateTo = () => navigate(url);

	return (
		<div className="flex items-center justify-center mt-9">
			<button
				type="button"
				className="bg-primary hover:bg-darker-primary text-invert-text text-md font-semibold uppercase px-6 py-3 tracking-wide outline-none rounded-md shadow"
				onClick={navigateTo}
			>
				{title}
			</button>
		</div>
	);
};

CTA.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

export default CTA;
