import React from 'react';

const FormTextarea = ({ module, register }) => {
	const { name, label, maxLength, minLength, required, placeholder } = module;

	return (
		<div className="flex flex-col gap-3">
			<label key={name} htmlFor={name} className="text-lg">
				{label}
			</label>
			<textarea
				name={name}
				id={name}
				minLength={minLength}
				maxLength={maxLength}
				placeholder={placeholder}
				required={required}
				ref={register}
				className="h-36 border px-2 py-3"
			/>
		</div>
	);
};

export default FormTextarea;
