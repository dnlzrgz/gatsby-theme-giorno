import React, { useState } from 'react';

import useSanityConfig from '../hooks/use-sanity-config';
import Nav from './Nav';
import NavHomeLink from './NavHomeLink';
import NavMenuButton from './NavMenuButton';
import NavMenuList from './NavMenuList';

const Header = () => {
	const [open, setOpen] = useState(false);
	const { global } = useSanityConfig();

	const clickLinkHandler = () => {
		setOpen(false);
	};

	console.log(global);
	return (
		<header className="w-full bg-white shadow fixed z-50">
			<Nav>
				<NavHomeLink clickHandler={clickLinkHandler}>Giorno</NavHomeLink>
				<NavMenuButton
					open={open}
					handleClick={() => {
						setOpen(!open);
					}}
				/>
				<div className="hidden md:block p-1">
					<NavMenuList clickHandler={clickLinkHandler} />
				</div>
			</Nav>

			{open ? (
				<div className="md:hidden text-lg text-center z-10">
					<NavMenuList clickHandler={clickLinkHandler} />
				</div>
			) : null}
		</header>
	);
};

export default Header;
