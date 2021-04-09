import React from 'react';

const ContactOptionAddress = ({ module }) => {
	const { title, address } = module;

	return (
		<>
			<address className="inline">
				<span className="font-medium">{title}</span>: {address}
			</address>
		</>
	);
};

export default ContactOptionAddress;
