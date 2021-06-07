import React, { FC, useState } from "react";

import useSanityConfig from "../hooks/use-sanity-config";
import HomeLink from "./HomeLink";
import NavMenuButton from "./NavMenuButton";
import NavMenuList from "./NavMenuList";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const {
    global: { title, navbar },
  } = useSanityConfig();

  const clinkHandler = () => {
    setOpen(false);
  };

  if (!navbar) return null;
  return (
    <header className="bg-background dark:bg-invert-background py-4 px-8 sm:px-16 lg:px-32 w-full shadow z-50 absolute top-0">
      <div className="flex items-center justify-between w-full">
        <HomeLink clickHandler={clinkHandler}>{title}</HomeLink>
        <NavMenuButton
          open={open}
          handleClick={() => {
            setOpen(!open);
          }}
        />
      </div>

      <nav>{open ? <NavMenuList clickHandler={clinkHandler} /> : null}</nav>
    </header>
  );
};

export default Header;
