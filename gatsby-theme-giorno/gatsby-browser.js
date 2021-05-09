import React from "react";

import Layout from "./src/components/Layout";

const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export { wrapPageElement };
