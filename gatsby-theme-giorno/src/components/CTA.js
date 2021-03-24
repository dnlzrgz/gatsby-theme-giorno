import React from 'react';
import { navigate } from 'gatsby';

const CTA = ({ title, url }) => {
	const navigateTo = () => navigate(url);

	return (
		<div className="flex items-center justify-center mt-9">
			<button
				type="button"
				className="bg-primary hover:bg-secondary text-invert-text text-md font-semibold uppercase px-6 py-3 tracking-wide rounded-md shadow"
				onClick={navigateTo}
			>
				{title}
			</button>
		</div>
	);
};

export default CTA;
