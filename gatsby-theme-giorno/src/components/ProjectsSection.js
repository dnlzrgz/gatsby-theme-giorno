import React from 'react';

import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import ProjectOverview from './ProjectOverview';

const ProjectsSection = ({ module }) => {
	const { title, description, projects } = module;

	return (
		<Section>
			<SectionHeader>
				<SectionTitle>{title}</SectionTitle>
				{description ? (
					<SectionDescription>{description}</SectionDescription>
				) : null}
			</SectionHeader>
			<main className="py-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
				{projects.map((project) => {
					return (
						<ProjectOverview key={project.slug.currrent} project={project} />
					);
				})}
			</main>
		</Section>
	);
};

export default ProjectsSection;
