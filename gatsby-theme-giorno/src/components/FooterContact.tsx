import React, { FC } from "react";
import type { ContactOptionAddress, ContactOptionEmail, ContactOptionPhone } from "../../types";

import FooterSection from "./FooterSection";
import FooterSectionTitle from "./FooterSectionTitle";
import FooterSectionMain from "./FooterSectionMain";
import footerContactBuilder from "../utils/footerContactBuilder";

interface Props {
  details: {
    title: string;
    description: string;
    options: [ContactOptionAddress | ContactOptionEmail | ContactOptionPhone];
  };
}
const FooterContact: FC<Props> = ({ details }) => {
  const { title, description, options } = details;

  return (
    <FooterSection>
      <header className="text-lg font-semibold">
        <FooterSectionTitle title={title} />
        {description ? <p>{description}</p> : null}
      </header>
      <FooterSectionMain>{footerContactBuilder(options)}</FooterSectionMain>
    </FooterSection>
  );
};

export default FooterContact;
