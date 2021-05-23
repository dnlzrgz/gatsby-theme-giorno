import React, { FC } from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";

import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import ProjectOverview from "./ProjectOverview";
import PlainContent from "./PlainContent";

interface Props {
  module: {
    _key: string;
    _type: string;
    title: string;
    description: unknown;
    projects: {
      _id: string;
      name: string;
      description: unknown;
      slug: {
        current: string;
      };
      image: {
        asset: {
          gatsbyImageData: IGatsbyImageData;
        };
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
        <div className="pr-8 sm:pr-16 md:pr-32 lg:pr-72">
          <SectionDescription>
            <PlainContent content={description} />
          </SectionDescription>
        </div>
      </SectionHeader>
      <main className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16">
        {projects.map((project) => {
          return <ProjectOverview key={project._id} project={project} />;
        })}
      </main>
    </Section>
  );
};

export default ProjectsSection;
