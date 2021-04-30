import React, { FC } from "react";

interface Props {
  module: {
    title: string;
    address: string;
  };
}

const IContactOptionAddress: FC<Props> = ({ module }) => {
  const { title, address } = module;

  return (
    <>
      <address className="inline">
        <span className="font-medium">{title}</span>: {address}
      </address>
    </>
  );
};

export default IContactOptionAddress;
