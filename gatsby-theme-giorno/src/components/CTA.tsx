import React, { FC } from "react";
import { Link } from "gatsby";

export interface Props {
  title: string;
  url: string;
  external: boolean;
}

const CTA: FC<Props> = ({ title, url, external }) => {
  return external ? (
    <a
      href={url}
      className="text-xl sm:text-2xl text-text dark:text-invert-text underline transition-all hover:no-underline outline-none mt-8"
    >
      {title}
    </a>
  ) : (
    <Link
      to={url}
      className="text-xl sm:text-2xl text-text dark:text-invert-text underline transition-all hover:no-underline outline-none mt-8"
    >
      {title}
    </Link>
  );
};

export default CTA;
