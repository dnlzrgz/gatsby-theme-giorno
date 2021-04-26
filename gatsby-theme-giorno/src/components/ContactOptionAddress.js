import React from "react";
import PropTypes from "prop-types";

const ContactOptionAddress = ({ module }) => {
  const { title, address } = module;

  return (
    <>
      <address className="inline">
        <span className="font-medium">{title}</span>: {address}
      </address>
    </>
  );
};

ContactOptionAddress.propTypes = {
  module: PropTypes.object.isRequired,
};

export default ContactOptionAddress;
