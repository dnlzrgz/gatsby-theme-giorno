import React from 'react';

const GridItem = ({ title, content }) => {
	return (
		<div className="md:px-6 grid grid-flow-row sm:gap-y-2 md:gap-y-3">
			<p className="text-2xl md:text-3xl font-serif font-semibold ">{title}</p>
			<p>{content}</p>
		</div>
	);
};

export default GridItem;
