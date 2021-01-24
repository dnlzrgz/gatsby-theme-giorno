import React from 'react';

import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';

const pageBuilder = (modules) => {
	return modules.map((module) => {
		switch (module._type) {
			case 'hero':
				return <Hero module={module} />;
			case 'textSection':
				return <TextSection module={module} />;
			case 'gridSection':
				return <GridSection module={module} />;
			default:
				console.log('Unknown Sanity module type', module);
				return null;
		}
	});
};

export default pageBuilder;
