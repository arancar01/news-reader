import React from "react";
import Newscard from "../components/Newscard";
import LatestNews from "../components/LatestNews";

const News = () => {
  return (
    <div className="p-4 pt-6">
      <h1 className="text-2xl font-bold mb-6 text-blue-700">News</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {/* Articles will be displayed here */}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button className="w-10 h-10 rounded-full text-white font-bold bg-gray-300">
              ‹
            </button>
            <span className="text-gray-700 font-medium text-sm">Page 1</span>
            <button className="w-10 h-10 rounded-full text-white font-bold bg-gray-300">
              ›
            </button>
          </div>
        </div>

        <LatestNews articles={[]} />
      </div>
    </div>
  );
};

export default News;
