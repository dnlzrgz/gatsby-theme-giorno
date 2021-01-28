import React from 'react';
import { useForm } from 'react-hook-form';

import formBuilder from '../utils/formBuilder';
import SectionTitle from './SectionTitle';

const Form = ({ module }) => {
	const { register, handleSubmit, reset } = useForm();

	const { title, name, inputs } = module;
	const submit = inputs.find((input) => input._type === 'submit');

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	};

	const onSubmit = (data) => {
		fetch('/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': name, ...data }),
		})
			.then((res) => {
				if (res.status === 200) {
					reset();
					return;
				}

				console.error(res);
			})
			.catch((error) => console.error(error));

		return;
	};

	return (
		<section className="h-screen">
			<SectionTitle>{title}</SectionTitle>
			<form
				name={name}
				method="POST"
				data-netlify="true"
				netlify-honeypot="bot-field"
				className="flex flex-col gap-3 px-3"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input type="hidden" name="bot-field" />
				{formBuilder(inputs, register)}
				<button type="submit">{submit.text}</button>
			</form>
		</section>
	);
};

export default Form;
