import React from "react";
import PropTypes from "prop-types";

const FooterSectionMain = ({ children }) => {
  return <main className="flex flex-col gap-2">{children}</main>;
};

FooterSectionMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterSectionMain;
