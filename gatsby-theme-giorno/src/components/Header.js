import React, { useState } from 'react';

import useAllPages from '../hooks/use-all-pages';
import Nav from './Nav';
import NavHomeLink from './NavHomeLink';
import NavMenuButton from './NavMenuButton';
import NavMenuList from './NavMenuList';

const Header = () => {
	const [open, setOpen] = useState(false);
	const pages = useAllPages();

	return (
		<header className="w-full bg-white shadow fixed z-10">
			<Nav>
				<NavHomeLink>Giorno</NavHomeLink>
				<NavMenuButton
					open={open}
					handleClick={() => {
						setOpen(!open);
					}}
				/>
				<div className="hidden md:flex gap-5 p-1">
					<NavMenuList pages={pages} />
				</div>
			</Nav>

			{open ? (
				<div className="md:hidden flex flex-col my-3 text-lg text-center z-10">
					<NavMenuList pages={pages} />
				</div>
			) : null}
		</header>
	);
};

export default Header;
