import React from 'react';

const ContactOptionPhone = ({ module }) => {
	const { title, phone } = module;

	return (
		<>
			<p>
				<span className="font-medium">{title}</span>:{' '}
				<a href={`tel:${phone}`}>{phone}</a>
			</p>
		</>
	);
};

export default ContactOptionPhone;
