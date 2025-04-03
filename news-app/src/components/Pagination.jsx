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
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-sky-500 text-white hover:bg-sky-600"
        }`}
      >
        ‹ Prev
      </button>
      
      {pages[0] > 1 && (
        <>
          <button
            onClick={() => onNext(1)}
            className="px-3 py-1 rounded-md text-sm font-medium bg-white text-sky-700 hover:bg-sky-100 transition"
          >
            1
          </button>
          {pages[0] > 2 && <span className="text-gray-400">...</span>}
        </>
      )}
      
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onNext(page)}
          disabled={page === currentPage}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            page === currentPage
              ? "bg-sky-600 text-white"
              : "bg-white text-gray-700 hover:bg-sky-100"
          }`}
        >
          {page}
        </button>
      ))}
     
      {pages[pages.length - 1] < totalPages && (
        <>
          {pages[pages.length - 1] < totalPages - 1 && (
            <span className="text-gray-400">...</span>
          )}
          <button
            onClick={() => onNext(totalPages)}
            className="px-3 py-1 rounded-md text-sm font-medium bg-white text-sky-700 hover:bg-sky-100 transition"
          >
            {totalPages}
          </button>
        </>
      )}

  
      <button
        onClick={() => onNext(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-sky-500 text-white hover:bg-sky-600"
        }`}
      >
        Next ›
      </button>
    </div>
  );
};

export default Pagination;
