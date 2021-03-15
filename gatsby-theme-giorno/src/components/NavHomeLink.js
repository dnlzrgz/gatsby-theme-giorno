import React from 'react';
import { Link } from 'gatsby';

const NavHomeLink = ({ children, clickHandler }) => {
	return (
		<Link to="/" className="text-xl" onClick={clickHandler}>
			<h1>{children}</h1>
		</Link>
	);
};

export default NavHomeLink;
