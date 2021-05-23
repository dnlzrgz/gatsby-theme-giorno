import React, { FC } from "react";

const Section: FC = ({ children }) => {
  return <section className="grid items-center py-32 sm:py-40 px-6 md:px-24">{children}</section>;
};

export default Section;
