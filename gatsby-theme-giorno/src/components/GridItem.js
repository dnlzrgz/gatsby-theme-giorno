import React from 'react';

const GridItem = ({ title, content }) => {
	return (
		<div className="md:px-6 grid grid-flow-row gap-y-2">
			<h3 className="text-2xl md:text-3xl font-serif font-semibold ">
				{title}
			</h3>
			<p>{content}</p>
		</div>
	);
};

export default GridItem;
