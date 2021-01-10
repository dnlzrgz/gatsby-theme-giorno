import React from 'react';

import Hero from '../components/Hero';

const pageBuilder = (modules) =>
	modules.map((module) => {
		switch (module.type) {
			case 'hero':
				return <Hero module={module} />;
			default:
				console.log('Unknown type', module);
				return null;
		}
	});

export default pageBuilder;
