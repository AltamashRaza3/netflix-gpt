import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-25 left-12 z-20 max-w-4xl">
      {/* Movie title */}
      <h1 className="text-4xl sm:text-3xl md:text-6xl font-bold text-white drop-shadow-lg">
        {title}
      </h1>

      {/* Movie overview */}
      <p className="text-white max-w-md mt-4 text-sm sm:text-base md:text-lg line-clamp-3">
        {overview}
      </p>

      {/* Action buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-white text-black rounded px-6 py-2 font-semibold hover:bg-white/80 transition duration-200 cursor-pointer">
          <span className="text-xl mr-2">▶</span> Play
        </button>
        <button className="bg-gray-700/70 text-white rounded px-6 py-2 font-semibold hover:bg-gray-700/90 transition duration-200">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
