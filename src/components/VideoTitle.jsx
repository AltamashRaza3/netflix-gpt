import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12 bg-gradient-to-b from-black/75 to-transparent max-w-4xl">
      <h1 className="text-6xl font-bold text-white drop-shadow-md">{title}</h1>
      <p className="text-white max-w-md mt-4 text-lg line-clamp-3">
        {overview}
      </p>
      <div className="mt-6 flex space-x-4">
        <button className="bg-white text-black rounded px-6 py-2 font-semibold hover:bg-gray-300 transition">
          Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white rounded px-6 py-2 font-semibold hover:bg-opacity-90 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
