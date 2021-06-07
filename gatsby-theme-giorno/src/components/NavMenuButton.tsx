import React, { FC } from "react";

import { MenuIcon, CloseMenuIcon } from "./icons";

interface Props {
  open: boolean;
  handleClick: () => void;
}

const NavMenuButton: FC<Props> = ({ open, handleClick }) => {
  return (
    <button type="button" className="text-text dark:text-invert-text p-3" onClick={handleClick}>
      {!open ? <MenuIcon /> : <CloseMenuIcon />}
    </button>
  );
};

export default NavMenuButton;
