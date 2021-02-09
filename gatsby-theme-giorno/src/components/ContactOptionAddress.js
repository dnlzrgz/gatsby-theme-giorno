import React from 'react';

const ContactOptionAddress = ({ module }) => {
	const { title, address } = module;

	return (
		<>
			<p>{title}:</p>
			<address>{address}</address>
		</>
	);
};

export default ContactOptionAddress;
