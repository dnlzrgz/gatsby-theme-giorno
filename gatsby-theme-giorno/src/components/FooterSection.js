import React from "react";
import PropTypes from "prop-types";

const FooterSection = ({ children }) => {
  return (
    <section className="flex flex-col sm:items-center">
      <div>{children}</div>
    </section>
  );
};

FooterSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterSection;
