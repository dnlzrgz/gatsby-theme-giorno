import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface ISanityConfig {
  global: {
    title: string;
    description: {
      _rawChildren: unknown;
    };
    image: {
      asset: IGatsbyImageData;
    };
    siteURL: string;
    twitterUsername: string;
    navbar: boolean;
  };
  blog: {
    enable: boolean;
  };
  footer: {
    copyright: string;
    sitemap: boolean;
  };
}

const useSanityConfig = (): ISanityConfig => {
  const data = useStaticQuery(graphql`
    query {
      config: sanityConfig {
        global: globalConfig {
          title
          description {
            _rawChildren
          }
          image {
            asset {
              gatsbyImageData(formats: [AUTO])
            }
          }
          siteURL
          twitterUsername
          navbar
        }
        blog: blogConfig {
          enable
        }
        footer: footerConfig {
          copyright
          sitemap
        }
      }
    }
  `);

  return { ...data.config };
};

export default useSanityConfig;
