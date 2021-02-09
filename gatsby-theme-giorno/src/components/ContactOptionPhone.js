import React from 'react';

const ContactOptionPhone = ({ module }) => {
	const { title, phone } = module;

	return (
		<>
			<p>{title}:</p>
			<a href={`tel:${phone}`}>{phone}</a>
		</>
	);
};

export default ContactOptionPhone;
