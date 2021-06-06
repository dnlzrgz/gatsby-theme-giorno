import React, { FC } from "react";

import useSanityConfig from "../hooks/use-sanity-config";
import useSanityExternalLinks from "../hooks/use-sanity-external-links";
import useSanityContactOptions from "../hooks/use-sanity-contact-options";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterSitemap from "./FooterSitemap";
import FooterContact from "./FooterContact";
import FooterCopyright from "./FooterCopyright";

const Footer: FC = () => {
  const {
    footer: { sitemap, copyright },
  } = useSanityConfig();
  const links = useSanityExternalLinks();
  const contactOptions = useSanityContactOptions();

  return (
    <footer
      className={`text-invert-text bg-footer flex justify-items-center flex-col sm:grid ${
        sitemap ? "sm:grid-col-3" : "sm:grid-col-2"
      } gap-9 py-16 px-6 md:px-12`}
      style={{ gridTemplateColumns: `repeat(${sitemap ? 3 : 2}, 1fr)` }}
    >
      {links?.length !== 0 ? <FooterSocialLinks links={links} /> : null}
      {contactOptions?.title ? <FooterContact details={contactOptions} /> : null}
      {sitemap ? <FooterSitemap /> : null}
      {copyright ? <FooterCopyright copy={copyright} /> : null}
    </footer>
  );
};

export default Footer;
