import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import author from "./author";
import blankHero from "./blankHero";
import blockSection from "./blockSection";
import blogConfig from "./blogConfig";
import config from "./config";
import contact from "./contact";
import contactAddress from "./contactAddress";
import contactEmail from "./contactEmail";
import contactPhone from "./contactPhone";
import cta from "./cta";
import description from "./description";
import externalLink from "./externalLink";
import externalLinks from "./externalLinks";
import footerConfig from "./footerConfig";
import form from "./form";
import globalConfig from "./globalConfig";
import gridItem from "./gridItem";
import gridSection from "./gridSection";
import hero from "./hero";
import input from "./input";
import internalLink from "./internalLink";
import page from "./page";
import pageBuilder from "./pageBuilder";
import plainContent from "./plainContent";
import post from "./post";
import postCategory from "./postCategory";
import project from "./project";
import projectsConfig from "./projectsConfig";
import projectShowcase from "./projectShowcase";
import published from "./published";
import quote from "./quote";
import richContent from "./richContent";
import submit from "./submit";
import textarea from "./textarea";
import title from "./title";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    author,
    blankHero,
    blockSection,
    blogConfig,
    config,
    contact,
    contactAddress,
    contactEmail,
    contactPhone,
    cta,
    description,
    externalLink,
    externalLinks,
    footerConfig,
    form,
    globalConfig,
    gridItem,
    gridSection,
    hero,
    input,
    internalLink,
    page,
    pageBuilder,
    plainContent,
    post,
    postCategory,
    project,
    projectsConfig,
    projectShowcase,
    published,
    quote,
    richContent,
    submit,
    textarea,
    title,
  ]),
});
