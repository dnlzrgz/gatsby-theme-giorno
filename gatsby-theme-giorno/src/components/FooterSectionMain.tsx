import React, { FC } from "react";

const FooterSectionMain: FC = ({ children }) => {
  return <main className="flex flex-col gap-3 text-xl">{children}</main>;
};

export default FooterSectionMain;
