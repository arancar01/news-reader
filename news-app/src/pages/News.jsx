import React, { useState } from "react";
import Newscard from "../components/Newscard";
import LatestNews from "../components/LatestNews";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  return (
    <div className="p-4 pt-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">News</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentArticles.map((item, index) => (
              <Newscard key={index} article={item} index={index} />
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="w-10 h-10 rounded-full text-white font-bold bg-blue-600 hover:bg-blue-700"
            >
              ‹
            </button>
            <span className="text-gray-700 font-medium text-sm">
              Page {currentPage}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  lastArticleIndex < articles.length ? prev + 1 : prev
                )
              }
              className="w-10 h-10 rounded-full text-white font-bold bg-blue-600 hover:bg-blue-700"
            >
              ›
            </button>
          </div>
        </div>

        <LatestNews articles={articles} />
      </div>
    </div>
  );
};

export default News;
