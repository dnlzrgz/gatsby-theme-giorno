import React, { FC } from "react";

interface Props {
  title: string;
}

const SectionTitle: FC<Props> = ({ title }) => (
  <h2 className="text-3xl sm:text-4xl md:text-5xl leading-snug sm:leading-snug md:leading-snug mb-4 font-semibold font-serif">
    {title}
  </h2>
);

export default SectionTitle;
