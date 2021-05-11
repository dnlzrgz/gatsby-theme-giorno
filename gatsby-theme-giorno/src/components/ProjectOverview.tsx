import React, { FC } from "react";
import { Link } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import useSanityConfig from "../hooks/use-sanity-config";
import ImageBlock from "./ImageBlock";

interface Props {
  project: {
    name: string;
    description: string;
    slug: {
      current: string;
    };
    image: {
      asset: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}

const ProjectOverview: FC<Props> = ({ project }) => {
  const { name, description, slug, image } = project;
  const {
    projects: { enable },
  } = useSanityConfig();

  return (
    <div className="flex flex-col mb-12">
      <div className="mt-6 flex flex-col gap-2">
        {enable ? (
          <Link to={`/projects/${slug}`}>
            <h2 className="text-3xl font-semibold font-serif">{name}</h2>
          </Link>
        ) : (
          <h2 className="text-3xl font-semibold font-serif">{name}</h2>
        )}
        <p className="text-lg md:pr-16">{description}</p>
      </div>
      <div className="h-auto max-w-3xl order-first">
        <ImageBlock image={image.asset.gatsbyImageData} altText={name} />
      </div>
    </div>
  );
};

export default ProjectOverview;
