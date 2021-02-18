import React from 'react';

const FooterCopyright = ({ copy }) => {
	return (
		<section className="col-span-1 sm:col-span-2 md:col-span-3">
			<main className="text-center px-12">
				<p>Copyright &copy; - {copy}</p>
			</main>
		</section>
	);
};

export default FooterCopyright;
