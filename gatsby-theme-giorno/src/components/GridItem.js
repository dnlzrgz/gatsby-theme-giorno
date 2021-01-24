import React from 'react';

const GridItem = ({ title, content }) => {
	return (
		<div>
			<p>{title}</p>
			<p>{content}</p>
		</div>
	);
};

export default GridItem;
