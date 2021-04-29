import React, { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-text dark:text-invert-text bg-background dark:bg-invert-background">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
