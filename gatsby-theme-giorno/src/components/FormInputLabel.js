import React from 'react';

const FormInputLabelRequired = () => (
	<span className="text-base">(required)</span>
);

const FormInputLabel = ({ label, required, forInput }) => {
	return (
		<label key={forInput} htmlFor={forInput} className="block text-lg">
			{label} {required && <FormInputLabelRequired />}
		</label>
	);
};

export default FormInputLabel;
