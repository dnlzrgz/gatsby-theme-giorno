import React, { FC } from "react";

import FooterSectionMain from "./FooterSectionMain";
import FooterSection from "./FooterSection";
import FooterSectionTitle from "./FooterSectionTitle";

interface Props {
  links: {
    node: {
      id: string;
      url: string;
      title: string;
    };
  }[];
}

const FooterSocialLinks: FC<Props> = ({ links }) => {
  return (
    <FooterSection>
      <header>
        <FooterSectionTitle title="External links" />
      </header>
      <FooterSectionMain>
        {links.map(({ node }) => {
          return (
            <a key={node.id} href={node.url}>
              {node.title}
            </a>
          );
        })}
      </FooterSectionMain>
    </FooterSection>
  );
};

export default FooterSocialLinks;
