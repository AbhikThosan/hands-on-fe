import React from "react";
import { Button } from "antd";

const PaginationControls = ({ page, pagination, onPageChange }) => {
  const { total_pages, has_previous, has_next } = pagination;

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= total_pages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="mt-4 flex justify-center items-center gap-2">
      <Button
        onClick={() => onPageChange(page - 1)}
        disabled={!has_previous}
        className="px-4 py-2"
      >
        Previous
      </Button>

      {getPageNumbers().map((pageNum) => (
        <Button
          key={pageNum}
          type={pageNum === page ? "primary" : "default"}
          onClick={() => onPageChange(pageNum)}
          className={`px-4 py-2 ${
            pageNum === page ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {pageNum}
        </Button>
      ))}

      <Button
        onClick={() => onPageChange(page + 1)}
        disabled={!has_next}
        className="px-4 py-2"
      >
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
