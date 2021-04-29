import React, { FC } from "react";

const HeroTitle: FC = ({ children }) => {
  return <h1 className="text-6xl md:text-8xl font-serif tracking-wide text-center mb-4">{children}</h1>;
};

export default HeroTitle;
