import React from 'react';
import PropTypes from 'prop-types';

const ContactOptionPhone = ({ module }) => {
	const { title, phone } = module;

	return (
		<p>
			<span className="font-medium">{title}</span>:{' '}
			<a href={`tel:${phone}`}>{phone}</a>
		</p>
	);
};

ContactOptionPhone.propTypes = {
	module: PropTypes.object.isRequired,
};

export default ContactOptionPhone;
