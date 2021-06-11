import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  url: string;
}

const ReadMoreLink: FC<Props> = ({ url }) => (
  <Link to={url} className="text-xl inline-block underline transition-all hover:no-underline outline-none mt-4">
    Read more →
  </Link>
);

export default ReadMoreLink;
