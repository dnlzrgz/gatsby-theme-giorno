import React from 'react';
import PropTypes from 'prop-types';

const FooterCopyright = ({ copy }) => {
	return (
		<section className="col-span-1 sm:col-span-2 md:col-span-3">
			<main className="text-center px-12">
				<p>Copyright &copy; - {copy}</p>
			</main>
		</section>
	);
};

FooterCopyright.propTypes = {
	copy: PropTypes.string.isRequired,
};

export default FooterCopyright;
