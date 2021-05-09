import React, { FC } from "react";
import { Helmet } from "react-helmet";

import useSanityConfig from "../hooks/use-sanity-config";

interface Props {
  title?: string;
  path?: string;
  description?: string;
  /** Asset absolute path. */
  image?: string;
}

const SEO: FC<Props> = ({ title, path = "", description, image }) => {
  const {
    global: { title: defaultTitle, description: defaultDescription, twitterUsername, siteURL, image: defaultImage },
  } = useSanityConfig();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription[0]?._rawChildren[0]?.text,
    twitterUsername,
    url: new URL(path, siteURL).toString(),
    image: image || defaultImage?.asset?.gatsbyImageData?.images?.fallback?.src,
  };

  return (
    <Helmet>
      <html lang="en" />
      <title>{seo.title}</title>
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      {seo.image && <meta name="image" content={seo.image} />}
      <meta name="robots" content="index, follow" />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      {image && <meta property="og:image" content={image} />}
      {seo.description && <meta property="og:description" content={seo.description} />}

      <meta name="twitter:title" content={seo.title} />
      {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
      {seo.description && <meta name="twitter:description" content={seo.description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};

export default SEO;
