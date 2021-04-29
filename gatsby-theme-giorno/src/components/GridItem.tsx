import React, { FC } from "react";

interface Props {
  title: string;
  content: string;
}

const GridItem: FC<Props> = ({ title, content }) => {
  return (
    <div className="md:px-6 grid grid-flow-row gap-y-2">
      <h3 className="text-3xl font-serif font-semibold ">{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default GridItem;
