import React from "react";
import { graphql } from "gatsby";

import PostCard from "../components/PostCard";

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges;

  return (
    <ul className="flex flex-col items-center min-h-screen max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      {posts.map(({ node }) => (
        <PostCard key={node.id} post={node} />
      ))}
    </ul>
  );
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allSanityPost(skip: $skip, limit: $limit, sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          title
          publishedAt(formatString: "")
          slug {
            current
          }
          preview {
            _rawChildren
            _type
            children {
              _key
              _type
              marks
              text
            }
          }
          categories {
            title
          }
          author {
            name
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

export default Blog;
