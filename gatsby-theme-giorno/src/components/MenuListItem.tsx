import React, { FC } from "react";

const MenuListItem: FC = ({ children }) => {
  return <li className="text-text dark:text-invert-text hover:text-primary py-3 md:py-0">{children}</li>;
};

export default MenuListItem;
