import builder from './builder';
import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';
import ProjectsSection from '../components/ProjectsSection';
import FormSection from '../components/FormSection';

const pageSerializer = new Map([
	['hero', Hero],
	['textSection', TextSection],
	['gridSection', GridSection],
	['form', FormSection],
	['projectShowcase', ProjectsSection],
]);

const pageBuilder = (modules) => builder(pageSerializer, modules);

export default pageBuilder;
