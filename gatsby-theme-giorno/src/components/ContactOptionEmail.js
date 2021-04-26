import React from "react";
import PropTypes from "prop-types";

const ContactOptionEmail = ({ module }) => {
  const { title, email } = module;

  return (
    <>
      <p>
        <span className="font-medium">{title}</span>: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </>
  );
};

ContactOptionEmail.propTypes = {
  module: PropTypes.object.isRequired,
};

export default ContactOptionEmail;
