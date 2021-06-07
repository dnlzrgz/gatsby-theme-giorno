import React, { FC } from "react";
import { Link } from "gatsby";

import useAllPages from "../hooks/use-all-pages";
import useSanityConfig from "../hooks/use-sanity-config";
import MenuListItem from "./MenuListItem";

interface Props {
  clickHandler: () => void;
}

const NavMenuList: FC<Props> = ({ clickHandler }) => {
  const pages = useAllPages();
  const {
    blog: { enable },
  } = useSanityConfig();

  return (
    <ul className="flex flex-col items-center w-full p-8 relative top-0 left-0">
      {pages.map((page) => {
        return (
          <MenuListItem key={page.slug.current}>
            <Link to={`/${page.slug.current}`} onClick={clickHandler}>
              {page.title}
            </Link>
          </MenuListItem>
        );
      })}

      {enable ? (
        <MenuListItem>
          <Link key="blog" to="/blog" onClick={clickHandler}>
            Blog
          </Link>
        </MenuListItem>
      ) : null}
    </ul>
  );
};

export default NavMenuList;
