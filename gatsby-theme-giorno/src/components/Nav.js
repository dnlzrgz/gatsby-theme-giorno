import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Nav = () => {
	const data = useStaticQuery(graphql`
		query MyQuery {
			pages: allSanityPage(
				filter: { public: { eq: true }, slug: { current: { ne: "index" } } }
			) {
				nodes {
					slug {
						current
					}
					title
					id
					public
				}
			}
		}
	`);

	const pages = data.pages.nodes;

	return (
		<nav className="shadow py-4 px-7 w-full h-auto bg-white fixed grid grid-cols-2 grid-rows-1 z-50">
			<div>
				<Link to="/">
					<h1>Logo</h1>
				</Link>
			</div>
			<div className="flex justify-end">
				{pages.map((page) => (
					<Link key={page.id} to={`/${page.slug.current}`}>
						{page.title}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
