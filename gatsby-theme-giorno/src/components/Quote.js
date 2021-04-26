import React from "react";
import PropTypes from "prop-types";

import ContetBlock from "./ContentBlock";

const Quote = ({ module }) => {
  const { author, _rawQuote: content } = module;

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

Quote.propTypes = {
  module: PropTypes.object.isRequired,
};

export default Quote;
