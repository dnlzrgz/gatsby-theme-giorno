import React from "react";

import builder from "./builder";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";

const formBuilder = (inputs) => {
  const formSerializer = new Map([
    ["input", ({ module }) => <FormInput module={module} />],
    ["textarea", ({ module }) => <FormTextarea module={module} />],
    // The submit button is handled directly on
    // the FormSection.js component.
    ["submit", () => null],
  ]);

  return builder(formSerializer, inputs);
};

export default formBuilder;
