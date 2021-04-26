import React from "react";
import PropTypes from "prop-types";

const Section = ({ children }) => {
  return <section className="min-h-screen grid items-center py-16 px-6 md:px-24">{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
