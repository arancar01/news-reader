import React, { useEffect, useState } from "react";
import axios from "axios";
import Newscard from "../components/Newscard";
import LatestNews from "../components/LatestNews";
import Pagination from "../components/Pagination";

const Economy = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_NEWS_API_URL}/everything`,
          {
            params: {
              q: "economy",
              language: "en",
              sortBy: "publishedAt",
              apiKey: import.meta.env.VITE_NEWS_API_KEY,
            },
          }
        );
        setArticles(res.data.articles);
        localStorage.setItem("articles", JSON.stringify(res.data.articles));
      } catch {
        setError("Failed to load economy news.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const goToPage = (page) => {
    const totalPages = Math.ceil(articles.length / articlesPerPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = articles.slice(firstArticleIndex, lastArticleIndex);

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="p-4 pt-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">Economy News</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentArticles.map((item, index) => (
              <Newscard
                key={index + firstArticleIndex}
                article={item}
                index={index + firstArticleIndex}
              />
            ))}
          </div>
          <div className="mt-10 mb-16">
            <Pagination
              currentPage={currentPage}
              totalArticles={articles.length}
              articlesPerPage={articlesPerPage}
              onPrev={() => goToPage(currentPage - 1)}
              onNext={goToPage}
            />
          </div>
        </div>
        <LatestNews articles={articles} />
      </div>
    </div>
  );
};

export default Economy;
