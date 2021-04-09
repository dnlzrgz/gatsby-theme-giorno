import React from 'react';

const ContactOptionEmail = ({ module }) => {
	const { title, email } = module;

	return (
		<>
			<p>
				<span className="font-medium">{title}</span>:{' '}
				<a href={`mailto:${email}`}>{email}</a>
			</p>
		</>
	);
};

export default ContactOptionEmail;
