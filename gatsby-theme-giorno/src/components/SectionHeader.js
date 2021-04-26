import React from "react";
import PropTypes from "prop-types";

const SectionHeader = ({ children }) => {
  return <header className="text-center md:text-left flex flex-col gap-3">{children}</header>;
};

SectionHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SectionHeader;
