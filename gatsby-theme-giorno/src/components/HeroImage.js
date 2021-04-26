import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const HeroImage = ({ asset }) => {
  const assetData = getImage(asset);

  // This image is purely presentational, that's why
  // the alt is empty.
  return <GatsbyImage image={assetData} alt="" className="h-screen w-full object-cover" />;
};

HeroImage.propTypes = {
  asset: PropTypes.object.isRequired,
};

export default HeroImage;
