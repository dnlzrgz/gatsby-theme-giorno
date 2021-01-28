import React from 'react';

const FormInput = ({ input, register }) => {
	const { name, label, type, required, placeholder } = input;

	return (
		<label key={name} htmlFor={name} className="flex flex-col">
			{label}
			<input
				className="border px-2 py-3"
				name={name}
				id={name}
				type={type}
				required={required}
				placeholder={placeholder}
				ref={register}
			/>
		</label>
	);
};

export default FormInput;
