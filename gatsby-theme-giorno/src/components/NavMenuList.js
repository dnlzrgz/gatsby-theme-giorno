import React from 'react';
import { Link } from 'gatsby';

const NavMenuList = ({ pages }) => {
	return (
		<ul role="menu">
			{pages.map((page) => {
				if (!page.public) return null;

				return (
					<Link key={page.id} to={`/${page.slug.current}`}>
						{page.title}
					</Link>
				);
			})}
		</ul>
	);
};

export default NavMenuList;
