import React, { FC } from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
  return (
    <div className="text-text dark:text-invert-text bg-background dark:bg-invert-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
