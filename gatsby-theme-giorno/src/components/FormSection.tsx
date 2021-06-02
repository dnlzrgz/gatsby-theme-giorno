import React, { FC } from "react";
import { IFormInput, IFormTextarea, IFormSubmit } from "../../types";

import formBuilder from "../utils/formBuilder";
import Section from "./Section";
import FormSubmit from "./FormSubmit";

export interface Props {
  module: {
    _key: string;
    _type: string;
    name: string;
    title: string;
    description: unknown;
    inputs: [IFormInput | IFormTextarea];
    submit: IFormSubmit;
  };
}
const FormSection: FC<Props> = ({ module }) => {
  const { title, description, name, inputs, submit } = module;

  const onSubmit = () => {
    return null;
  };

  return (
    <Section title={title} description={description} fullWidth>
      <form
        name={name}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={onSubmit}
        className="flex justify-center mt-9"
      >
        <div className="flex flex-col flex-grow gap-6 md:gap-9 max-w-xl">
          <input type="hidden" name="bot-field" />

          {formBuilder(inputs)}

          <FormSubmit onSubmit={onSubmit}>{submit.text}</FormSubmit>
        </div>
      </form>
    </Section>
  );
};

export default FormSection;
