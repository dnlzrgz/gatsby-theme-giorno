import React, { FC } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import ProjectOverview from "./ProjectOverview";

interface Props {
  module: {
    _key: string;
    _type: string;
    title: string;
    description: string;
    projects: {
      _id: string;
      name: string;
      description: string;
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
  const { title, description, projects } = module;

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {description ? <SectionDescription>{description}</SectionDescription> : null}
      </SectionHeader>
      <main className="py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        {projects.map((project) => {
          return <ProjectOverview key={project._id} project={project} />;
        })}
      </main>
    </Section>
  );
};

export default ProjectsSection;
