import React from "react";
import Newscard from "./Newscard";

const SearchResults = ({ results }) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="bg-gray-50 p-4">
      <h2 className="text-xl font-bold text-blue-600 mb-4">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((article, index) => (
          <Newscard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
