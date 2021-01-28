import React from 'react';

const FormTextarea = ({ input, register }) => {
	const { name, label, maxLength, minLength, required, placeholder } = input;

	return (
		<label key={name} htmlFor={name} className="flex flex-col">
			{label}
			<textarea
				name={name}
				id={name}
				minLength={minLength}
				maxLength={maxLength}
				placeholder={placeholder}
				required={required}
				ref={register}
			/>
		</label>
	);
};

export default FormTextarea;
