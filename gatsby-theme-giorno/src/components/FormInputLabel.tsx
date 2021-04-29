import React, { FC } from "react";

const FormInputLabelRequired: FC = () => <span className="text-base">(required)</span>;

interface Props {
  label: string;
  required: boolean;
  forInput: string;
}

const FormInputLabel: FC<Props> = ({ label, required, forInput }) => {
  return (
    <label key={forInput} htmlFor={forInput} className="block text-lg">
      {label} {required && <FormInputLabelRequired />}
    </label>
  );
};

export default FormInputLabel;
