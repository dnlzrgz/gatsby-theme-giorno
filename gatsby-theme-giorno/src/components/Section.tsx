import React, { FC } from "react";

const Section: FC = ({ children }) => {
  return <section className="min-h-screen grid items-center py-16 px-6 md:px-24">{children}</section>;
};

export default Section;
