import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  clickHandler: () => void;
}

const NavHomeLink: FC<Props> = ({ children, clickHandler }) => {
  return (
    <Link to="/" onClick={clickHandler}>
      <h1 className="text-2xl text-text dark:text-invert-text">{children}</h1>
    </Link>
  );
};

export default NavHomeLink;
