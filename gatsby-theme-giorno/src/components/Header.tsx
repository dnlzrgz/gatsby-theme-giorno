import React, { FC, useState } from "react";

import useSanityConfig from "../hooks/use-sanity-config";
import Nav from "./Nav";
import NavHomeLink from "./NavHomeLink";
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
    <header className="w-full bg-white dark:bg-invert-background shadow fixed z-50">
      <Nav>
        <NavHomeLink clickHandler={clinkHandler}>{title}</NavHomeLink>
        <NavMenuButton
          open={open}
          handleClick={() => {
            setOpen(!open);
          }}
        />
        <div className="hidden md:block p-1">
          <NavMenuList clickHandler={clinkHandler} />
        </div>
      </Nav>

      {open ? (
        <div className="md:hidden text-lg text-center z-10">
          <NavMenuList clickHandler={clinkHandler} />
        </div>
      ) : null}
    </header>
  );
};

export default Header;
