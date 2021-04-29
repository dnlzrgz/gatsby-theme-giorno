import React, { FC } from "react";

import FormInputLabel from "./FormInputLabel";

interface Props {
  module: {
    name: string;
    label: string;
    maxLength: number;
    minLength: number;
    required: boolean;
  };
}

const FormTextarea: FC<Props> = ({ module }) => {
  const { name, label, maxLength, minLength, required } = module;

  return (
    <div className="flex flex-col gap-3">
      <FormInputLabel label={label} required={required} forInput={name} />
      <textarea
        className="h-36 resize-none block w-full border border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 outline-none rounded-md px-3 py-3 mt-1"
        name={name}
        id={name}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
      />
    </div>
  );
};

export default FormTextarea;
