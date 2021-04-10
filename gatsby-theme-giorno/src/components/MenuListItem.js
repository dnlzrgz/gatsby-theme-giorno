import React from 'react';
import PropTypes from 'prop-types';

const MenuListItem = ({ children }) => {
	return (
		<li className="text-text dark:text-invert-text hover:text-primary py-3 md:py-0">
			{children}
		</li>
	);
};

MenuListItem.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MenuListItem;
