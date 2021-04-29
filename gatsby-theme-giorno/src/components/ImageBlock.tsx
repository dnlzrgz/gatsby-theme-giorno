import React, { FC } from "react";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

interface Props {
  image: IGatsbyImageData;
  altText: string;
}

const ImageBlock: FC<Props> = ({ image, altText }) => {
  const assetData = getImage(image);

  return <GatsbyImage image={assetData} alt={altText} className="object-cover" />;
};

export default ImageBlock;
