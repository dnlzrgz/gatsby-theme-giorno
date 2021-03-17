import React from 'react';
import Img from 'gatsby-image';
import { getGatsbyImageData } from 'gatsby-source-sanity';

import clientConfig from '../utils/clientConfig';

const ImageBlock = ({ node }) => {
	if (!node || !node.asset || !node.asset._ref) return null;
	const fluid = getGatsbyImageData(node.asset._ref, {}, clientConfig.sanity);

	return <Img fluid={fluid} fadeIn className="object-contain" />;
};

export default ImageBlock;
