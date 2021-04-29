import React, { FC } from "react";

export interface Props {
  title: string;
}

const FooterSectionTitle: FC<Props> = ({ title }) => {
  return <h2 className="text-lg font-semibold tracking-wide mb-1">{title}</h2>;
};

export default FooterSectionTitle;
