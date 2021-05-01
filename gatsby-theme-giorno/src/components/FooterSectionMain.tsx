import React, { FC } from "react";

const FooterSectionMain: FC = ({ children }) => {
  return <main className="flex flex-col gap-1">{children}</main>;
};

export default FooterSectionMain;
