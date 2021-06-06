import React, { FC } from "react";

const Nav: FC = ({ children }) => {
  return <nav className="py-3 px-5 flex items-center justify-between w-full z-50">{children}</nav>;
};

export default Nav;
