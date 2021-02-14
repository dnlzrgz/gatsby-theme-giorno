import React from 'react';
import { Link } from 'gatsby';

const NavHomeLink = ({ children }) => {
	return (
		<Link to="/" className="text-xl">
			<h1>{children}</h1>
		</Link>
	);
};

export default NavHomeLink;
