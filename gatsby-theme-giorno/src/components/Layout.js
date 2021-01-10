import React from 'react';

import Nav from './Nav';

const Layout = ({ children }) => {
	return (
		<>
			<Nav></Nav>
			<main>{children}</main>
			<footer></footer>
		</>
	);
};

export default Layout;
