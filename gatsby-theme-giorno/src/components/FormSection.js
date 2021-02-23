import React from 'react';
import { useForm } from 'react-hook-form';

import formBuilder from '../utils/formBuilder';
import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
import FormSubmit from './FormSubmit';

const FormSection = ({ module }) => {
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
		<Section>
			<SectionHeader>
				<SectionTitle>{title}</SectionTitle>
			</SectionHeader>
			<main>
				<form
					name={name}
					method="POST"
					data-netlify="true"
					netlify-honeypot="bot-field"
					onSubmit={handleSubmit(onSubmit)}
					className="flex justify-center mt-6 md:mt-9"
				>
					<div className="flex flex-col flex-grow gap-6 md:gap-9 max-w-xl">
						<input type="hidden" name="bot-field" />

						{formBuilder(inputs, register)}

						<div className="flex items-center justify-end md:justify-center">
							<FormSubmit onSubmit={handleSubmit(onSubmit)}>
								{submit.text}
							</FormSubmit>
						</div>
					</div>
				</form>
			</main>
		</Section>
	);
};

export default FormSection;
