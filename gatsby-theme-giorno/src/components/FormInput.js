import React from 'react';

const FormInput = ({ module, register }) => {
	const { name, label, type, required, placeholder } = module;

	console.log(module);

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
