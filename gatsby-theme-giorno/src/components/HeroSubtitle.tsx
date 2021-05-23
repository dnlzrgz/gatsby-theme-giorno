import React, { FC } from "react";

const HeroSubtitle: FC = ({ children }) => {
  return <h2 className="text-xl md:text-2xl mb-8 max-w-prose">{children}</h2>;
};

export default HeroSubtitle;
