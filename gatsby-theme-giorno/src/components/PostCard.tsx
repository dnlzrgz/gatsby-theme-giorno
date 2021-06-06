import React, { FC } from "react";
import { Link } from "gatsby";

import PlainContent from "./PlainContent";
import ReadMoreLink from "./ReadMoreLink";

interface Props {
  post: {
    title: string;
    publishedAt: string;
    preview: unknown;
    slug: {
      current: string;
    };
    author: {
      name: string;
      slug: {
        current: string;
      };
    };
  };
}

const PostCard: FC<Props> = ({ post }) => {
  const { publishedAt, title, preview, slug } = post;
  const postUrl = `/blog/${slug.current}`;
  const date = new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(publishedAt));

  return (
    <li className="py-12">
      <article className="text-text dark:text-invert-text space-y-2">
        <dd className="text-lg leading-6 font-medium mb-1">{date}</dd>
        <Link to={postUrl}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-semibold font-serif">{title}</h2>
        </Link>

        <main className="text-xl sm:text-2sl max-w-prose">
          <PlainContent content={preview} />
        </main>
        <footer>
          <ReadMoreLink url={postUrl} />
        </footer>
      </article>
    </li>
  );
};

export default PostCard;
