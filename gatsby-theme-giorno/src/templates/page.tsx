import React, { FC } from "react";
import { graphql } from "gatsby";

import pageBuilder from "../utils/pageBuilder";

interface Props {
  data: {
    page: {
      pageBuilder: unknown;
    };
  };
}

const Page: FC<Props> = ({ data }) => {
  return <>{pageBuilder(data.page.pageBuilder)}</>;
};

export const query = graphql`
  query($slug: String!) {
    page: sanityPage(slug: { current: { eq: $slug } }) {
      title
      ...PageBuilder
    }
  }
`;

export default Page;
