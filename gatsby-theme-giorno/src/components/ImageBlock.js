import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ImageBlock = ({ image, altText }) => {
	const assetData = getImage(image);

	return (
		<GatsbyImage image={assetData} alt={altText} className="object-cover" />
	);
};

export default ImageBlock;
