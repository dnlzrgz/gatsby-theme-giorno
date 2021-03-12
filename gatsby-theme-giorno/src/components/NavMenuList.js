import React from 'react';
import { Link } from 'gatsby';

const NavMenuList = ({ pages, clickHandler }) => {
	return (
		<ul className="flex flex-col md:flex-row py-3 md:py-0 md:gap-12">
			{pages.map((page) => {
				return (
					<Link
						key={page.id}
						to={`/${page.slug.current}`}
						className="py-3"
						onClick={clickHandler}
					>
						{page.title}
					</Link>
				);
			})}
		</ul>
	);
};

export default NavMenuList;
