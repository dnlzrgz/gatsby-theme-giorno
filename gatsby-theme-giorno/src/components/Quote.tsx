import React, { FC } from "react";

import ContetBlock from "./ContentBlock";

interface Props {
  module: {
    author: string;
    rawQuote: any; // FIXME:
  };
}

const Quote: FC<Props> = ({ module }) => {
  const { author, rawQuote: content } = module;

  return (
    <section className="flex flex-col justify-center items-center gap-3 py-16 px-6 md:px-24 bg-gradient-to-br from-primary to-darker-primary text-white min-h-screen">
      <header>
        <p className="text-xl text-center">
          Quote by <span className="font-semibold tracking-wide">{author}</span>:
        </p>
      </header>
      <main className="text-center text-3xl sm:text-4xl font-serif font-bold tracking-wide">
        <ContetBlock content={content} />
      </main>
    </section>
  );
};

export default Quote;
