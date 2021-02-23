import React from 'react';

const FormInput = ({ module, register }) => {
	const { name, label, type, required, placeholder } = module;

	return (
		<div className="flex flex-col gap-3">
			<label key={name} htmlFor={name} className="text-lg">
				{label}
			</label>
			<input
				className="border rounded-md px-3 py-3"
				name={name}
				id={name}
				type={type}
				required={required}
				placeholder={placeholder}
				ref={register}
			/>
		</div>
	);
};

export default FormInput;
