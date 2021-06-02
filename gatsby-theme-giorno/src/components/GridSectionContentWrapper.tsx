import React, { FC } from "react";

const GridSectionContentWrapper: FC = ({ children }) => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-14">{children}</div>;
};

export default GridSectionContentWrapper;
