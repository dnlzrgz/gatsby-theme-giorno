import builder from './builder';
import FooterSocialLinks from '../components/FooterSocialLinks';
import FooterSitemap from '../components/FooterSitemap';
import FooterContact from '../components/FooterContact';
import FooterCopyright from '../components/FooterCopyright';

const footerSerializer = new Map([
	['footerSocialLinks', FooterSocialLinks],
	['footerSitemap', FooterSitemap],
	['footerContact', FooterContact],
	['footerCopyright', FooterCopyright],
]);

const footerBuilder = (modules) => builder(footerSerializer, modules);

export default footerBuilder;
