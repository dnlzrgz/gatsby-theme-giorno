import React from 'react';
import { Link } from 'gatsby';

const NavMenuList = ({ pages }) => {
	return (
		<ul className="flex flex-col md:flex-row py-3 md:py-0 md:gap-12">
			{pages
				.sort((a, b) => (a.title < b.title ? -1 : 1))
				.map((page) => {
					if (!page.public) return null;

					return (
						<Link key={page.id} to={`/${page.slug.current}`} className="py-3">
							{page.title}
						</Link>
					);
				})}
		</ul>
	);
};

export default NavMenuList;
