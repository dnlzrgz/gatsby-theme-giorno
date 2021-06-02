import React, { FC } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import Section from "./Section";
import GridSectionContentWrapper from "./GridSectionContentWrapper";
import ProjectOverview from "./ProjectOverview";

interface Props {
  module: {
    _key: string;
    _type: string;
    title: string;
    description: unknown;
    url: {
      title: string;
      url: string;
      external: boolean;
    };
    projects: {
      _id: string;
      name: string;
      description: unknown;
      slug: {
        current: string;
      };
      image: {
        asset: IGatsbyImageData;
      };
    }[];
  };
}

const ProjectsSection: FC<Props> = ({ module }) => {
  const { title, description, url, projects } = module;

  return (
    <Section title={title} description={description} url={url} fullWidth>
      <GridSectionContentWrapper>
        {projects.map((project) => {
          return <ProjectOverview key={project._id} project={project} />;
        })}
      </GridSectionContentWrapper>
    </Section>
  );
};

export default ProjectsSection;
