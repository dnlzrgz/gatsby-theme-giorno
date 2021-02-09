import React from 'react';

const ContactOptionEmail = ({ module }) => {
	const { title, email } = module;

	return (
		<>
			<p>{title}:</p>
			<a href={`mailto:${email}`}>{email}</a>
		</>
	);
};

export default ContactOptionEmail;
