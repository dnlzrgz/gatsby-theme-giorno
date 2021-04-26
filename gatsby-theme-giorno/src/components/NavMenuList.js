import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import useAllPages from "../hooks/use-all-pages";
import useSanityConfig from "../hooks/use-sanity-config";
import MenuListItem from "./MenuListItem";

const NavMenuList = ({ clickHandler }) => {
  const pages = useAllPages();
  const {
    blog: { enable },
  } = useSanityConfig();

  return (
    <ul className="grid grid-flow-row md:grid-flow-col md:py-0 md:gap-12 pb-6 md:pb-0">
      {enable ? (
        <MenuListItem>
          <Link key="blog" to="/blog" onClick={clickHandler}>
            Blog
          </Link>
        </MenuListItem>
      ) : null}

      {pages.map((page) => {
        return (
          <MenuListItem key={page.slug.current}>
            <Link to={`/${page.slug.current}`} onClick={clickHandler}>
              {page.title}
            </Link>
          </MenuListItem>
        );
      })}
    </ul>
  );
};

NavMenuList.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default NavMenuList;
