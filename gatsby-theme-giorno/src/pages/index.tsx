import React, { FC } from "react";
import { graphql } from "gatsby";

import SEO from "../components/SEO";
import pageBuilder from "../utils/pageBuilder";

const Index: FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <SEO path="/" />
      {pageBuilder(data.page.pageBuilder)}
    </>
  );
};

export const query = graphql`
  query {
    page: sanityPage(slug: { current: { eq: "index" } }) {
      title
      ...PageBuilder
    }
  }
`;

export default Index;
