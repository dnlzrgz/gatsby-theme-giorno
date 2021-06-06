import React from "react";
import { graphql, Link } from "gatsby";

import PostCard from "../components/PostCard";

const Pagination = ({ currentPageNumber, numberOfPages, nextPagePath, previousPagePath }) => {
  return (
    <div className="text-lg flex justify-center gap-8 p-12">
      {previousPagePath ? (
        <Link to={previousPagePath} className="hover:text-primary">
          ← Prev
        </Link>
      ) : (
        <span className="select-none opacity-60" aria-disabled>
          ← Prev
        </span>
      )}
      {currentPageNumber + 1} / {numberOfPages}
      {nextPagePath ? (
        <Link to={nextPagePath} className="hover:text-primary">
          Next →
        </Link>
      ) : (
        <span className="select-none opacity-60" aria-disabled>
          ← Prev
        </span>
      )}
    </div>
  );
};

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
