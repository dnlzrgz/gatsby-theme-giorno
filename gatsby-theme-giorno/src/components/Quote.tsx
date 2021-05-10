import React, { FC } from "react";

import ContetBlock from "./ContentBlock";

interface Props {
  module: {
    author: string;
    rawQuote: unknown;
  };
}

const Quote: FC<Props> = ({ module }) => {
  const { author, rawQuote: content } = module;

  return (
    <section className="grid gap-3 py-32 px-6 md:px-24 bg-gradient-to-br from-primary to-darker-primary text-white">
      <header>
        <p className="text-xl text-center px-12 sm:px-0">
          Quote by <span className="font-semibold tracking-wide">{author}</span>:
        </p>
      </header>
      <main className="text-center text-3xl leading-snug sm:leading-snug sm:text-4xl font-serif font-bold tracking-wide">
        <ContetBlock content={content} />
      </main>
    </section>
  );
};

export default Quote;
