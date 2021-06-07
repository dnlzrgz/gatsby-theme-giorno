import React, { FC } from "react";

const MenuListItem: FC = ({ children }) => {
  return (
    <li className="text-xl sm:text-2xl inline-block underline transitiona-all hover:no-underline py-4">{children}</li>
  );
};

export default MenuListItem;
