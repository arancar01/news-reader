import React, { useEffect, useState } from "react";
import Newscard from "../components/Newscard";
import LatestNews from "../components/LatestNews";
import axios from "axios";
import Carousel from "../components/Carousel";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_NEWS_API_URL}/everything`,
          {
            params: {
              q: "news",
              language: "en",
              sortBy: "publishedAt",
              apiKey: import.meta.env.VITE_NEWS_API_KEY,
            },
          }
        );
        setArticles(res.data.articles);
        localStorage.setItem("articles", JSON.stringify(res.data.articles));
      } catch {
        setError("Failed to load news.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  const nextPage = () => {
    if (lastArticleIndex < articles.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="p-4 pt-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">News</h1>

      {articles.length > 0 && (
        <div className="mb-8">
          <Carousel articles={articles} />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentArticles.map((item) => {
              const realIndex = articles.indexOf(item); // realIndex put real index
              return (
                <Newscard key={realIndex} article={item} index={realIndex} />
              );
            })}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-full text-white font-bold ${
                currentPage === 1
                  ? "bg-gray-300"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              ‹
            </button>
            <span className="text-gray-700 font-medium text-sm">
              Page {currentPage}
            </span>
            <button
              onClick={nextPage}
              disabled={lastArticleIndex >= articles.length}
              className={`w-10 h-10 rounded-full text-white font-bold ${
                lastArticleIndex >= articles.length
                  ? "bg-gray-300"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
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
