import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  title: string;
  url: string;
}

const InternalLink: FC<Props> = ({ title, url }) => (
  <Link
    to={url}
    className="text-xl sm:text-2xl inline-block underline transition-all hover:no-underline outline-none mt-4 xl:mt-16"
  >
    {title}
  </Link>
);

export default InternalLink;
