import React, { FC } from "react";

const SectionTitle: FC = ({ children }) => (
  <h2 className="text-4xl leading-snug md:leading-snug md:text-5xl sm:px-6 md:px-0 md:mb-4 font-semibold font-serif">
    {children}
  </h2>
);

export default SectionTitle;
