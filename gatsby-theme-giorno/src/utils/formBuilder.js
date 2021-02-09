import React from 'react';

import builder from './builder';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';

const formBuilder = (inputs, register) => {
	const formSerializer = new Map([
		['input', (module) => <FormInput module={module} register={register} />],
		[
			'textarea',
			(module) => <FormTextarea module={module} register={register} />,
		],
		['submit', null],
	]);

	return builder(formSerializer, inputs);
};

export default formBuilder;
