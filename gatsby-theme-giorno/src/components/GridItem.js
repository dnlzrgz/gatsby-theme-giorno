import React from 'react';

const GridItem = ({ title, content }) => {
	return (
		<div className="md:px-6">
			<p className="text-2xl font-semibold text-gray-900">{title}</p>
			<p>{content}</p>
		</div>
	);
};

export default GridItem;
