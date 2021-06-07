import React, { FC } from "react";

import useSanityConfig from "../hooks/use-sanity-config";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC = ({ children }) => {
  const {
    global: { navbar },
  } = useSanityConfig();

  return (
    <div className={`text-text dark:text-invert-text bg-background dark:bg-invert-background ${navbar ? "pt-20" : ""}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
