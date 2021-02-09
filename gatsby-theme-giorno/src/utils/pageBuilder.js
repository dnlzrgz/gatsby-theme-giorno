import builder from './builder';
import Hero from '../components/Hero';
import TextSection from '../components/TextSection';
import GridSection from '../components/GridSection';
import ProjectShowcase from '../components/ProjectShowcase';
import Form from '../components/Form';
import Footer from '../components/Footer';

const pageSerializer = new Map([
	['hero', Hero],
	['textSection', TextSection],
	['gridSection', GridSection],
	['form', Form],
	['projectShowcase', ProjectShowcase],
	['footer', Footer],
]);

const pageBuilder = (modules) => builder(pageSerializer, modules);

export default pageBuilder;
