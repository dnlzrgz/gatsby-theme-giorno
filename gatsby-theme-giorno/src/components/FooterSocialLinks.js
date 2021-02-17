import React from 'react';

const FooterSocialLinks = ({ links }) => {
	return (
		<section>
			<header className="text-lg font-semibold">
				<h2>Social links</h2>
			</header>
			<main className="flex flex-col gap-1">
				{links.map(({ node }) => {
					return (
						<a key={node.id} href={node.url}>
							{node.title}
						</a>
					);
				})}
			</main>
		</section>
	);
};

export default FooterSocialLinks;
