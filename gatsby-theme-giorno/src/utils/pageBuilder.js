import React from 'react';

import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';
import ProjectShowcase from '../components/ProjectShowcase';
import Form from '../components/Form';
import Footer from '../components/Footer';

// TODO: refactor pageBuilder and other builders into a single constructor function
const pageBuilder = (modules) => {
	return modules.map((module) => {
		switch (module._type) {
			case 'hero':
				return <Hero key={module._key} module={module} />;
			case 'textSection':
				return <TextSection key={module._key} module={module} />;
			case 'gridSection':
				return <GridSection key={module._key} module={module} />;
			case 'form':
				return <Form key={module._key} module={module} />;
			case 'projectShowcase':
				return <ProjectShowcase key={module._key} module={module} />;
			case 'footer':
				return <Footer key={module._key} module={module} />;
			default:
				console.warn('Unknown Sanity module', module);
				return null;
		}
	});
};

export default pageBuilder;
