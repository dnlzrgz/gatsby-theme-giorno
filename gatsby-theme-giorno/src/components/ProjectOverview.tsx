import React, { FC } from "react";
import { Link } from "gatsby";

import ImageBlock from "./ImageBlock";

interface Props {
  project: {
    name: string;
    description: string;
    slug: {
      current: string;
    };
    image: {
      asset: any; // FIXME:
    };
  };
}

const ProjectOverview: FC<Props> = ({ project }) => {
  const { name, description, slug, image } = project;

  return (
    <div className="flex flex-col mb-12">
      <div className="mt-6 flex flex-col gap-2">
        {
          // TODO: Check if projects page is enable
        }
        <Link to={`/projects/${slug}`}>
          <h2 className="text-3xl font-semibold font-serif">{name}</h2>
        </Link>
        <p className="text-lg md:pr-16">{description}</p>
      </div>
      <div className="h-auto max-w-3xl order-first">
        <ImageBlock image={image.asset.gatsbyImageData} altText={name} />
      </div>
    </div>
  );
};

export default ProjectOverview;