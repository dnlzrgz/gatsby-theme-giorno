import React, { FC } from "react";

const FooterSection: FC = ({ children }) => {
  return (
    <section className="flex flex-col sm:items-center">
      <div>{children}</div>
    </section>
  );
};

export default FooterSection;
