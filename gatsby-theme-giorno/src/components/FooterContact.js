import React from "react";
import PropTypes from "prop-types";

import FooterSection from "./FooterSection";
import FooterSectionTitle from "./FooterSectionTitle";
import FooterSectionMain from "./FooterSectionMain";
import footerContactBuilder from "../utils/footerContactBuilder";

const FooterContact = ({ details }) => {
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

FooterContact.propTypes = {
  details: PropTypes.object.isRequired,
};

export default FooterContact;
