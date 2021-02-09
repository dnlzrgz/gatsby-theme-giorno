import React from 'react';

const ContactOptionEmail = ({ details }) => {
	return (
		<>
			<p>{details.title}:</p>
			<a href={`mailto:${details.email}`}>{details.email}</a>
		</>
	);
};

const ContactOptionPhone = ({ details }) => {
	return (
		<>
			<p>{details.title}:</p>
			<a href={`tel:${details.phone}`}>{details.phone}</a>
		</>
	);
};

const ContactOptionAddress = ({ details }) => {
	return (
		<>
			<p>{details.title}:</p>
			<address>{details.address}</address>
		</>
	);
};

const FooterContact = ({ section }) => {
	const { option: options } = section;

	return (
		<section>
			<header>
				<h2>Contact info</h2>
			</header>
			<main>
				{/* TODO: refactor into a footer contact builder */}
				{options.map((option) => {
					switch (option._type) {
						case 'contactEmail':
							return <ContactOptionEmail key={option._key} details={option} />;
						case 'contactPhone':
							return <ContactOptionPhone key={option._key} details={option} />;
						case 'contactAddress':
							return (
								<ContactOptionAddress key={option._key} details={option} />
							);
						default:
							return null;
					}
				})}
			</main>
		</section>
	);
};

export default FooterContact;
