import builder from './builder';
import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';
import ProjectShowcase from '../components/ProjectShowcase';
import Form from '../components/Form';

const pageSerializer = new Map([
	['hero', Hero],
	['textSection', TextSection],
	['gridSection', GridSection],
	['form', Form],
	['projectShowcase', ProjectShowcase],
]);

const pageBuilder = (modules) => builder(pageSerializer, modules);

export default pageBuilder;
