import React, { FC } from "react";

const HeroSubtitle: FC = ({ children }) => {
  return <h2 className="text-xl md:text-3xl text-center px-12">{children}</h2>;
};

export default HeroSubtitle;
