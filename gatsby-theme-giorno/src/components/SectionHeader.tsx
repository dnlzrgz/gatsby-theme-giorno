import React, { FC } from "react";

const SectionHeader: FC = ({ children }) => {
  return <header className="text-center md:text-left flex flex-col gap-3">{children}</header>;
};

export default SectionHeader;
