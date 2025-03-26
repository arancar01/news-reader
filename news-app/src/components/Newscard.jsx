import React from "react";

const Newscard = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">Title</h2>
        <p className="text-sm text-gray-500 mb-2">Date</p>
        <p className="text-gray-700">Description</p>
      </div>
    </div>
  );
};

export default Newscard;
