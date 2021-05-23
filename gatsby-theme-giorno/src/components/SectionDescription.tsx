import React, { FC } from "react";

const SectionDescription: FC = ({ children }) => {
  return <p className="text-xl sm:text-2xl max-w-prose">{children}</p>;
};

export default SectionDescription;
