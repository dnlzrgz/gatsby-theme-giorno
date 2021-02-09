import React from 'react';

const FooterSocialLinks = ({ section }) => {
	const { title, links } = section;

	return (
		<section>
			<header>
				<h2>{title}</h2>
			</header>
			<main className="flex flex-col">
				{links.map((link) => {
					return <a href={link.url}>{link.title}</a>;
				})}
			</main>
		</section>
	);
};

export default FooterSocialLinks;
