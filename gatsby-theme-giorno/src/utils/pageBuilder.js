import builder from "./builder";
import BlankHero from "../components/BlankHero";
import FormSection from "../components/FormSection";
import GridSection from "../components/GridSection";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import Quote from "../components/Quote";
import BlockSection from "../components/BlockSection";

const pageSerializer = new Map([
  ["blankHero", BlankHero],
  ["hero", Hero],
  ["blockSection", BlockSection],
  ["gridSection", GridSection],
  ["form", FormSection],
  ["projectShowcase", ProjectsSection],
  ["quote", Quote],
]);

const pageBuilder = (modules) => builder(pageSerializer, modules);

export default pageBuilder;
