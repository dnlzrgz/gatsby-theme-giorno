import React, { FC, ReactChild } from "react";

import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";

interface Props {
  title: string;
  description: unknown;
  url?: {
    title: string;
    url: string;
    external: boolean;
  };
  fullWidth?: boolean;
  children: ReactChild;
}

const Section: FC<Props> = ({ title, description, url, fullWidth, children }) => {
  return (
    <section className={`my-40 px-8 sm:px-16 lg:px-32 ${fullWidth ? "" : "grid xl:grid-cols-2 xl:gap-24"}`}>
      <header className="mb-12">
        <SectionTitle title={title} />
        <SectionDescription content={description} />
        {url?.title && url?.url ? (
          url?.external ? (
            <ExternalLink title={url.title} url={url.url} />
          ) : (
            <InternalLink title={url.title} url={url.url} />
          )
        ) : null}
      </header>
      <main>{children}</main>
    </section>
  );
};

Section.defaultProps = {
  fullWidth: false,
};

export default Section;
