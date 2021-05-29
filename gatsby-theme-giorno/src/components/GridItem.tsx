import React, { FC } from "react";

import PlainContent from "./PlainContent";

interface Props {
  title: string;
  description: unknown;
}

const GridItem: FC<Props> = ({ title, description }) => {
  return (
    <div className="md:px-6 flex flex-col">
      <h3 className="text-2xl sm:text-3xl font-serif font-semibold mb-3">{title}</h3>
      <div className="text-xl">
        <PlainContent content={description} />
      </div>
    </div>
  );
};

export default GridItem;
