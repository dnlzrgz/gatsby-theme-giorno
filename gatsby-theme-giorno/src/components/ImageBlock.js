import React from 'react';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

import clientConfig from '../utils/clientConfig';

const ImageBlock = ({ node }) => {
	if (!node.asset) return null;

	const fluid = getFluidGatsbyImage(node.asset._ref, {}, clientConfig.sanity);
	return <Img fluid={fluid} />;
};

export default ImageBlock;
