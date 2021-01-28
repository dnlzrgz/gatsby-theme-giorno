import React from 'react';

import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';

const formBuilder = (inputs, register) => {
	return inputs.map((input) => {
		switch (input._type) {
			case 'input':
				return <FormInput key={input._key} input={input} register={register} />;
			case 'textarea':
				return (
					<FormTextarea key={input._key} input={input} register={register} />
				);
			case 'submit':
				return null;
			default:
				console.warning('Unknown form input', input);
				return null;
		}
	});
};

export default formBuilder;
