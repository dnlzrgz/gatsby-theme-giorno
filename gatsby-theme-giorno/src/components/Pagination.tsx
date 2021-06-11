import React, { FC } from "react";
import { Link } from "gatsby";

interface Props {
  currentPageNumber: number;
  numberOfPages: number;
  nextPagePath: string;
  previousPagePath: string;
}

const Pagination: FC<Props> = ({ currentPageNumber, numberOfPages, nextPagePath, previousPagePath }) => {
  return (
    <div className="text-xl flex justify-center gap-8 my-40">
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
          Next →
        </span>
      )}
    </div>
  );
};

export default Pagination;
