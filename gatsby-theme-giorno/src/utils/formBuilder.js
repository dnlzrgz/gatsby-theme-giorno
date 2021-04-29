import React from "react";

import builder from "./builder";
import FormInput from "../components/FormInput";
import FormTextarea from "../components/FormTextarea";

const formBuilder = (inputs) => {
  const formSerializer = new Map([
    ["input", ({ module }) => <FormInput module={module} />],
    ["textarea", ({ module }) => <FormTextarea module={module} />],
  ]);

  return builder(formSerializer, inputs);
};

export default formBuilder;
