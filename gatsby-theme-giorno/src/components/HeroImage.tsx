import React, { FC } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  asset: IGatsbyImageData;
}

const HeroImage: FC<Props> = ({ asset }) => {
  const assetData = getImage(asset);

  if (assetData === undefined) return null;

  // This image is purely presentational, that's why
  // the alt is empty.
  return <GatsbyImage image={assetData} alt="" className="h-screen w-full object-cover" />;
};

export default HeroImage;
