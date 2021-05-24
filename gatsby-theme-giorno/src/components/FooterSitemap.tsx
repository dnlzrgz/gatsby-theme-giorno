import React, { FC } from "react";
import { Link } from "gatsby";

import FooterSection from "./FooterSection";
import FooterSectionTitle from "./FooterSectionTitle";
import FooterSectionMain from "./FooterSectionMain";
import useAllPages from "../hooks/use-all-pages";
import useSanityConfig from "../hooks/use-sanity-config";

const FooterSitemap: FC = () => {
  const pages = useAllPages();
  const {
    blog: { enable },
  } = useSanityConfig();

  if (!pages.length) return null;
  return (
    <FooterSection>
      <header>
        <Link to="/sitemap.xml" className="text-xl">
          <FooterSectionTitle title="Sitemap" />
        </Link>
      </header>

      <FooterSectionMain>
        <Link key={"home"} to="/">
          Home
        </Link>
        {enable ? (
          <Link key={"blog"} to="/blog">
            Blog
          </Link>
        ) : null}
        {pages.map((page) => (
          <Link key={page.id} to={`/${page.slug.current}`}>
            {page.title}
          </Link>
        ))}
      </FooterSectionMain>
    </FooterSection>
  );
};

export default FooterSitemap;
