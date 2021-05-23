import React, { FC } from "react";
import { Link } from "gatsby";

export interface Props {
  title: string;
  url: string;
}

const CTA: FC<Props> = ({ title, url }) => {
  return (
    <Link
      to={url}
      className="text-xl sm:text-2xl text-text border-text border-b-2 transition-all hover:border-transparent outline-none"
    >
      {title}
    </Link>
  );
};

export default CTA;
