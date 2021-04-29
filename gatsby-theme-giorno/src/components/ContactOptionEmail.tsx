import React, { FC } from "react";

interface Props {
  module: {
    title: string;
    email: string;
  };
}
const ContactOptionEmail: FC<Props> = ({ module }) => {
  const { title, email } = module;

  return (
    <>
      <p>
        <span className="font-medium">{title}</span>: <a href={`mailto:${email}`}>{email}</a>
      </p>
    </>
  );
};

export default ContactOptionEmail;
