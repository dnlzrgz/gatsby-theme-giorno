import React from 'react';

import ImageBlock from './ImageBlock';

const ProjectOverview = ({ project }) => {
	const { name, description, url, _rawImage: image } = project;

	return (
		<div>
			<h2>{name}</h2>
			<p>{description}</p>
			<div className="w-auto h-44">
				<ImageBlock node={image} />
			</div>
			<a href={url.url}>{url.title}</a>
		</div>
	);
};

export default ProjectOverview;
