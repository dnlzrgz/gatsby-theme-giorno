import React from "react";
import PropTypes from "prop-types";

const HeroSubtitle = ({ children }) => {
  return <h2 className="text-xl md:text-3xl text-center px-12">{children}</h2>;
};

HeroSubtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroSubtitle;
