import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ children }) => {
	return (
		<nav className="py-3 px-5 flex items-center justify-between">
			{children}
		</nav>
	);
};

Nav.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Nav;
