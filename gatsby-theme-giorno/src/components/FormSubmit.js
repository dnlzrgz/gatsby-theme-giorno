import React from 'react';

const FormSubmit = ({ onSubmit, children }) => {
	return (
		<button
			type="submit"
			onClick={onSubmit}
			className="text-md md:text-lg bg-gray-700 text-white px-6 py-3 rounded-md"
		>
			{children}
		</button>
	);
};

export default FormSubmit;
