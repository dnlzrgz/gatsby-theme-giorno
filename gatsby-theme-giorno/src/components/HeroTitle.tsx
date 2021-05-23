import React, { FC } from "react";

const HeroTitle: FC = ({ children }) => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-wide md:leading-tight mb-4 ">
      {children}
    </h1>
  );
};

export default HeroTitle;
