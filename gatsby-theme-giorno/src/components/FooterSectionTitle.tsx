import React, { FC } from "react";

export interface Props {
  title: string;
}

const FooterSectionTitle: FC<Props> = ({ title }) => {
  return <h2 className="text-2xl font-serif tracking-wider font-semibold mb-3">{title}</h2>;
};

export default FooterSectionTitle;
