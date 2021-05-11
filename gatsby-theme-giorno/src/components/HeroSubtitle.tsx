import React, { FC } from "react";

const HeroSubtitle: FC = ({ children }) => {
  return <h2 className="text-2xl sm:text-3xl text-center px-12">{children}</h2>;
};

export default HeroSubtitle;
