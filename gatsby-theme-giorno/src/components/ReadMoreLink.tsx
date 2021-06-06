import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  url: string;
}

const ReadMoreLink: FC<Props> = ({ url }) => (
  <Link to={url} className="text-lg text-primary hover:text-darker-primary">
    Read more →
  </Link>
);

export default ReadMoreLink;
