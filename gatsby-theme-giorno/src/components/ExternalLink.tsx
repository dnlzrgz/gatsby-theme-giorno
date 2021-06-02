import React, { FC } from "react";

interface Props {
  title: string;
  url: string;
}

const ExternalLink: FC<Props> = ({ title, url }) => (
  <a
    href={url}
    className="text-xl sm:text-2xl inline-block underline transition-all hover:no-underline outline-none mt-4 xl:mt-16"
  >
    {title}
  </a>
);

export default ExternalLink;
