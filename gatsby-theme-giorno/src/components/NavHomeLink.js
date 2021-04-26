import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

const NavHomeLink = ({ children, clickHandler }) => {
  return (
    <Link to="/" onClick={clickHandler}>
      <h1 className="text-2xl text-text dark:text-invert-text">{children}</h1>
    </Link>
  );
};

NavHomeLink.propTypes = {
  children: PropTypes.node.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default NavHomeLink;
