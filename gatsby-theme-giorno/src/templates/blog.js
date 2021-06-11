import React from "react";
import { graphql } from "gatsby";

import PostCard from "../components/PostCard";
import Pagination from "../components/Pagination";

const Blog = ({ data, pageContext }) => {
  const posts = data.posts.edges;
  const { pageNumber, numberOfPages, nextPagePath, previousPagePath } = pageContext;

  return (
    <>
      <ul className="flex flex-col items-center min-h-screen max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        {posts.map(({ node }) => (
          <PostCard key={node.id} post={node} />
        ))}
      </ul>
      <Pagination
        currentPageNumber={pageNumber}
        numberOfPages={numberOfPages}
        nextPagePath={nextPagePath}
        previousPagePath={previousPagePath}
      />
    </>
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
        }
      }
    }
  }
`;

export default Blog;
