import React, { FC } from "react";

interface Props {
  copy: string;
}
const FooterCopyright: FC<Props> = ({ copy }) => {
  return (
    <section className="col-span-3">
      <main className="text-center px-12">
        <p>Copyright &copy; - {copy}</p>
      </main>
    </section>
  );
};

export default FooterCopyright;
