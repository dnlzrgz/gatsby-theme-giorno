import React from 'react';
import { Link } from 'gatsby';

import ImageBlock from './ImageBlock';

const ProjectOverview = ({ project }) => {
	const { name, description, slug, _rawImage: image } = project;

	// TODO: Refactor into multiple components
	return (
		<div className="flex flex-col mb-12">
			<div className="mt-6 flex flex-col gap-2">
				<Link to={`/projects/${slug}`}>
					<h2 className="text-2xl font-semibold text-gray-900 cursor-pointer">
						{name}
					</h2>
				</Link>
				<p className="text-lg md:pr-16">{description}</p>
			</div>
			<div className="h-auto w-full order-first">
				<ImageBlock node={image} />
			</div>
		</div>
	);
};

export default ProjectOverview;
