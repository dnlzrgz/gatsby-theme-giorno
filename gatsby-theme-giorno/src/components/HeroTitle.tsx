import React, { FC } from "react";

const HeroTitle: FC = ({ children }) => {
  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-wide leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-4 max-w-prose">
      {children}
    </h1>
  );
};

export default HeroTitle;
