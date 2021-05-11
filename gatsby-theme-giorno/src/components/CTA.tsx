import React, { FC } from "react";
import { navigate } from "gatsby";

export interface Props {
  title: string;
  url: string;
}

const CTA: FC<Props> = ({ title, url }) => {
  const navigateTo = () => navigate(url);

  return (
    <button
      type="button"
      className="mt-9 text-xl sm:text-2xl text-text border-text border-b-2 transition-all hover:border-transparent outline-none"
      onClick={navigateTo}
    >
      {title}
    </button>
  );
};

export default CTA;
