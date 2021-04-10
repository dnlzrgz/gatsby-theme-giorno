import React from 'react';
import PropTypes from 'prop-types';

import formBuilder from '../utils/formBuilder';
import Section from './Section';
import SectionHeader from './SectionHeader';
import SectionTitle from './SectionTitle';
import SectionDescription from './SectionDescription';
import FormSubmit from './FormSubmit';

const FormSection = ({ module }) => {
	const { title, description, name, inputs } = module;
	const submit = inputs.find((input) => input._type === 'submit');

	return (
		<Section>
			<SectionHeader>
				<SectionTitle>{title}</SectionTitle>
				{description ? (
					<SectionDescription>{description}</SectionDescription>
				) : null}
			</SectionHeader>
			<main>
				<form
					name={name}
					method="POST"
					data-netlify="true"
					data-netlify-honeypot="bot-field"
					onSubmit={() => {}}
					className="flex justify-center mt-6 md:mt-9"
				>
					<div className="flex flex-col flex-grow gap-6 md:gap-9 max-w-xl">
						<input type="hidden" name="bot-field" />

						{formBuilder(inputs)}

						<FormSubmit onSubmit={() => {}}>{submit.text}</FormSubmit>
					</div>
				</form>
			</main>
		</Section>
	);
};

FormSection.propTypes = {
	module: PropTypes.object.isRequired,
};

export default FormSection;
