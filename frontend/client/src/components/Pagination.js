import React from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const Pagination = ({ page, changePage, pages }) => {
  return (
    pages > 1 && (
      <div>
        <MdOutlineNavigateBefore
          size={26}
          onClick={() => {
            if (page > 1) changePage((page) => page - 1);
          }}
          disabled={page === 1}
        />
        <MdOutlineNavigateNext
          size={26}
          onClick={() => {
            if (page < pages && page > 0) changePage((page) => page + 1);
          }}
          disabled={page === pages}
        />
      </div>
    )
  );
};

export default Pagination;
