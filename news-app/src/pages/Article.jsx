import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articles")) || [];
    const found = articles[parseInt(id)];
    if (found) {
      setArticle(found);
    } else {
      setError("Article not found");
    }
    setLoading(false);
  }, [id]);

  const latestArticles =
    JSON.parse(localStorage.getItem("articles"))?.slice(0, 5) || [];

  if (loading)
    return <p className="p-4 text-center text-sky-700">Loading article...</p>;
  if (error) return <p className="p-4 text-center text-red-600">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row gap-8">
      {/*محتوى المقال */}
      <article className="md:w-2/3 w-full">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full object-cover rounded-lg mb-4"
          />
        ) : (
          <img
            src="/images/placeholder.jpg"
            alt="Default"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        )}

        <h1 className="text-3xl font-bold text-blue-900 mb-2">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">{article.publishedAt}</p>
        <p className="text-base text-gray-800 leading-relaxed text-justify tracking-wide">
          {article.content || article.description || "No content available."}
        </p>
      </article>

      {/*لأخبار الجانبية */}
      <aside className="md:w-1/3 w-full bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          Latest News
        </h2>

        <div className="space-y-4">
          {latestArticles.map((item, index) => (
            <Link
              to={`/article/${index}`}
              key={index}
              className="block bg-white rounded shadow p-3 hover:bg-gray-50 transition"
            >
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {item.publishedAt?.slice(0, 10)}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <video controls width="100%" className="rounded shadow">
            <source src="/videos/news-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </aside>
    </div>
  );
};

export default Article;
