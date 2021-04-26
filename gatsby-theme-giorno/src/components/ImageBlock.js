import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ImageBlock = ({ image, altText }) => {
  const assetData = getImage(image);

  return <GatsbyImage image={assetData} alt={altText} className="object-cover" />;
};

ImageBlock.propTypes = {
  image: PropTypes.object.isRequired,
  altText: PropTypes.string,
};

export default ImageBlock;
