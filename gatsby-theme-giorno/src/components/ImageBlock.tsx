import React, { FC } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  asset: IGatsbyImageData;
  altText: string;
}

const ImageBlock: FC<Props> = ({ asset, altText }) => {
  const assetData = getImage(asset);

  if (assetData === undefined) return null;

  return <GatsbyImage image={assetData} alt={altText} />;
};

export default ImageBlock;
