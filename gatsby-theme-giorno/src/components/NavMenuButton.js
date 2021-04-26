import React from "react";
import PropTypes from "prop-types";

import { MenuIcon, CloseMenuIcon } from "./icons";

const NavMenuButton = ({ open, handleClick }) => {
  return (
    <button type="button" className="md:hidden text-text dark:text-invert-text p-1" onClick={handleClick}>
      {!open ? <MenuIcon /> : <CloseMenuIcon />}
    </button>
  );
};

NavMenuButton.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default NavMenuButton;
