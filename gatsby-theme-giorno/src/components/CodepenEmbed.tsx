import React, { FC } from "react";

interface Props {
  url: string;
}

const CodepenEmbed: FC<Props> = ({ url }) => {
  if (!url) {
    return null;
  }
  const splitURL = url.split("/");

  // [ 'https:', '', 'codepen.io', 'user', 'pen', 'id' ]
  const [, , , user, , hash] = splitURL;
  const embedUrl = `https://codepen.io/${user}/embed/${hash}?height=${370}&theme-id=dark&default-tab=result`;

  return (
    <iframe
      height="370"
      className="w-full"
      scrolling="no"
      title="Embed CodePen"
      src={embedUrl}
      frameBorder="no"
      loading="lazy"
      data-zoom={0.5}
      allowFullScreen
      referrerPolicy="no-referrer"
      seamless
    ></iframe>
  );
};

export default CodepenEmbed;
