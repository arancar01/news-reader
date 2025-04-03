import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Newscard from "../components/Newscard";
import LatestNews from "../components/LatestNews";
import Pagination from "../components/Pagination";
import SearchContext from "../context/SearchContext";

const Technology = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;
  const { searchTerm } = useContext(SearchContext); 
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_NEWS_API_URL}/everything`,
          {
            params: {
              q: "technology",
              language: "en",
              sortBy: "publishedAt",
              apiKey: import.meta.env.VITE_NEWS_API_KEY,
            },
          }
        );
        setArticles(res.data.articles);
        localStorage.setItem("articles", JSON.stringify(res.data.articles));
      } catch {
        setError("Failed to load technology news.");
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

  const filteredArticles = searchTerm
    ? articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : articles;

  const lastArticleIndex = currentPage * articlesPerPage;
  const firstArticleIndex = lastArticleIndex - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    firstArticleIndex,
    lastArticleIndex
  );

  if (loading) return <div className="p-4 text-center">Loading...</div>;
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  return (
    <div className="p-4 pt-6">
      <h1 className="text-2xl font-bold mb-6 text-sky-600">Technology News</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentArticles.map((item, index) => (
              <Newscard
                key={firstArticleIndex + index}
                article={item}
                index={firstArticleIndex + index}
              />
            ))}
          </div>
          <div className="mt-10 mb-16">
            <Pagination
              currentPage={currentPage}
              totalArticles={filteredArticles.length}
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

export default Technology;
