import React, { FC } from "react";
import { FormInput, FormTextarea, FormSubmit as FormSubmitType } from "../../types";

import formBuilder from "../utils/formBuilder";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import SectionTitle from "./SectionTitle";
import SectionDescription from "./SectionDescription";
import FormSubmit from "./FormSubmit";

export interface Props {
  module: {
    _key: string;
    _type: string;
    name: string;
    title: string;
    description: string;
    inputs: [FormInput | FormTextarea];
    submit: FormSubmitType;
  };
}
const FormSection: FC<Props> = ({ module }) => {
  const { title, description, name, inputs, submit } = module;

  const onSubmit = () => {
    return null;
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {description ? <SectionDescription>{description}</SectionDescription> : null}
      </SectionHeader>
      <main>
        <form
          name={name}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={onSubmit}
          className="flex justify-center mt-6 md:mt-9"
        >
          <div className="flex flex-col flex-grow gap-6 md:gap-9 max-w-xl">
            <input type="hidden" name="bot-field" />

            {formBuilder(inputs)}

            <FormSubmit onSubmit={onSubmit}>{submit.text}</FormSubmit>
          </div>
        </form>
      </main>
    </Section>
  );
};

export default FormSection;
