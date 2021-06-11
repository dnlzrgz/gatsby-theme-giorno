import React from "react";
import { graphql } from "gatsby";

import SectionTitle from "../components/SectionTitle";
import ContentBlock from "../components/ContentBlock";

const Post = ({ data, pageContext }) => {
  const { post } = data;
  const { title, publishedAt, _rawContent } = post;
  const date = new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(publishedAt));

  return (
    <article className="flex flex-col items-center min-h-screen mx-auto my-40 mb-24 px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <header className="mb-4">
        <p className="text-lg leading-6 font-medium mb-1">{date}</p>
        <SectionTitle title={title} />
      </header>
      <main className="max-w-prose w-full">
        <ContentBlock content={_rawContent} />
      </main>
    </article>
  );
};

export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      public
      title
      publishedAt(formatString: "")
      slug {
        current
      }
      _rawContent
      content {
        children {
          _key
          _type
          marks
          text
        }
        list
        style
        _key
        _type
        _rawChildren
      }
    }
  }
`;

export default Post;
