import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  clickHandler: () => void;
}

const HomeLink: FC<Props> = ({ children, clickHandler }) => {
  return (
    <Link to="/" onClick={clickHandler}>
      <h1 className="text-2xl md:text-3xl text-text dark:text-invert-text font-serif">{children}</h1>
    </Link>
  );
};

export default HomeLink;
