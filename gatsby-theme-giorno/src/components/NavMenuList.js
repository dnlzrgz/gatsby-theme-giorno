import React from 'react';
import { Link } from 'gatsby';

import useAllPages from '../hooks/use-all-pages';
import useSanityConfig from '../hooks/use-sanity-config';

const NavMenuList = ({ clickHandler }) => {
	const pages = useAllPages();
	const {
		blog: { enable },
	} = useSanityConfig();

	return (
		<ul className="flex flex-col md:flex-row py-3 md:py-0 md:gap-12">
			{enable ? (
				<Link key={'block'} to="/blog" className="py-3" onClick={clickHandler}>
					Blog
				</Link>
			) : null}
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
