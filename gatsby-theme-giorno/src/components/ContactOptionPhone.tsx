import React, { FC } from "react";

interface Props {
  module: {
    title: string;
    phone: string;
  };
}

const ContactOptionPhone: FC<Props> = ({ module }) => {
  const { title, phone } = module;

  return (
    <p>
      <span className="font-medium">{title}</span>: <a href={`tel:${phone}`}>{phone}</a>
    </p>
  );
};

export default ContactOptionPhone;
