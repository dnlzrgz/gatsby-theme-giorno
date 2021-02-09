import builder from './builder';
import ContactOptionEmail from '../components/ContactOptionEmail';
import ContactOptionPhone from '../components/ContactOptionPhone';
import ContactOptionAddress from '../components/ContactOptionAddress';

const footerSerializer = new Map([
	['contactEmail', ContactOptionEmail],
	['contactPhone', ContactOptionPhone],
	['contactAddress', ContactOptionAddress],
]);

const footerContactBuilder = (modules) => builder(footerSerializer, modules);

export default footerContactBuilder;
