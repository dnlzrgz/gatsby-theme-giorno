import React from "react";
import PropTypes from "prop-types";

const FormInputLabelRequired = () => <span className="text-base">(required)</span>;

const FormInputLabel = ({ label, required, forInput }) => {
  return (
    <label key={forInput} htmlFor={forInput} className="block text-lg">
      {label} {required && <FormInputLabelRequired />}
    </label>
  );
};

FormInputLabel.propTypes = {
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  forInput: PropTypes.string.isRequired,
};

export default FormInputLabel;
