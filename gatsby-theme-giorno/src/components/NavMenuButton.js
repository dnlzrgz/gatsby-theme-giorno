import React from 'react';

import { MenuIcon, CloseMenuIcon } from './icons';

const NavMenuButton = ({ open, handleClick }) => {
	return (
		<button type="button" className="text-black-700 p-1" onClick={handleClick}>
			{!open ? <MenuIcon /> : <CloseMenuIcon />}
		</button>
	);
};

export default NavMenuButton;
