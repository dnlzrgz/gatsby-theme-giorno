import React from 'react';

import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ProjectOverview from './ProjectOverview';

const ProjectShowcase = ({ module }) => {
	const { title, description, projects } = module;

	return (
		<section className="h-screen">
			<SectionTitle>{title}</SectionTitle>
			<SectionDescription>{description}</SectionDescription>
			{projects.map((project) => {
				return (
					<ProjectOverview key={project.slug.currrent} project={project} />
				);
			})}
		</section>
	);
};

export default ProjectShowcase;
