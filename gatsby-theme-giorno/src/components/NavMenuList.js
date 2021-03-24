import React from 'react';
import { Link } from 'gatsby';

import useAllPages from '../hooks/use-all-pages';
import useSanityConfig from '../hooks/use-sanity-config';

const MenuListItem = ({ children }) => {
	return (
		<li className="text-text dark:text-invert-text hover:text-primary py-3 md:py-0">
			{children}
		</li>
	);
};

const NavMenuList = ({ clickHandler }) => {
	const pages = useAllPages();
	const {
		blog: { enable },
	} = useSanityConfig();

	return (
		<ul className="grid grid-flow-row md:grid-flow-col md:py-0 md:gap-12 pb-6 md:pb-0">
			<MenuListItem>
				{enable ? (
					<Link key="blog" to="/blog" onClick={clickHandler}>
						Blog
					</Link>
				) : null}
			</MenuListItem>

			{pages.map((page) => {
				return (
					<MenuListItem>
						<Link
							key={page.id}
							to={`/${page.slug.current}`}
							onClick={clickHandler}
						>
							{page.title}
						</Link>
					</MenuListItem>
				);
			})}
		</ul>
	);
};

export default NavMenuList;
