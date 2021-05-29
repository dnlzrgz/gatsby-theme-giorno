import React, { FC } from "react";

const SectionDescription: FC = ({ children }) => {
  return <div className="text-xl sm:text-2xl max-w-prose">{children}</div>;
};

export default SectionDescription;
