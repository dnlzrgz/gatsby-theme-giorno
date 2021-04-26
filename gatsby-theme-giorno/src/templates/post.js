import React from "react";
import { graphql } from "gatsby";

const Post = ({ data }) => {
  console.log(data);
  return <h1>Post page</h1>;
};

export default Post;
