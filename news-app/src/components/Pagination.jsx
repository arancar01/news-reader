import React from "react";

const Pagination = ({
  currentPage,
  totalArticles,
  articlesPerPage,
  onPrev,
  onNext,
}) => {
  const totalPages = Math.ceil(totalArticles / articlesPerPage);

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(currentPage - 2, 1);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getVisiblePages();

  return (
    <div className="flex justify-center items-center flex-wrap gap-2 mt-10">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className={`px-3 py-1 text-sm rounded-md font-medium transition duration-200 ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-cyan-600 text-white hover:bg-cyan-700"
        }`}
      >
        ‹ Prev
      </button>

      {pages[0] > 1 && (
        <>
          <button
            onClick={() => onNext(1)}
            className="px-3 py-1 text-sm rounded-md font-medium border bg-white text-cyan-700 border-cyan-300 hover:bg-cyan-100"
          >
            1
          </button>
          {pages[0] > 2 && <span className="text-gray-400 px-1">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onNext(page)}
          disabled={page === currentPage}
          className={`px-4 py-1.5 text-sm rounded-md font-medium border transition duration-200 ${
            page === currentPage
              ? "bg-cyan-700 text-white border-cyan-700"
              : "bg-white text-cyan-700 border-cyan-300 hover:bg-cyan-100"
          }`}
        >
          {page}
        </button>
      ))}

      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="text-gray-400 px-1">...</span>
          )}
          <button
            onClick={() => onNext(totalPages)}
            className="px-3 py-1 text-sm rounded-md font-medium border bg-white text-cyan-700 border-cyan-300 hover:bg-cyan-100"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onNext(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 text-sm rounded-md font-medium transition duration-200 ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-cyan-600 text-white hover:bg-cyan-700"
        }`}
      >
        Next ›
      </button>
    </div>
  );
};

export default Pagination;
