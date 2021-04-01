import React from 'react';

import FormInputLabel from './FormInputLabel';

const FormInput = ({ module, register }) => {
	const { name, label, type, required } = module;
	console.log(name, required);

	return (
		<div className="flex flex-col gap-3">
			<FormInputLabel label={label} required={required} forInput={name} />
			<input
				className="block w-full border border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 outline-none rounded-md px-3 py-3 mt-1"
				name={name}
				id={name}
				type={type}
				required={required}
				ref={register}
			/>
		</div>
	);
};

export default FormInput;
