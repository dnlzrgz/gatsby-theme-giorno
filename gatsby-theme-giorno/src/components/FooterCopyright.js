import React from 'react';

const FooterCopyright = ({ copy }) => {
	return (
		<section>
			<main className="text-center px-12">
				<p>Copyright &copy; - {copy}</p>
			</main>
		</section>
	);
};

export default FooterCopyright;
