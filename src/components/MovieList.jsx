import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  if (!movies) return null;

  return (
    <div className="relative px-4 md:px-8 mb-10">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h2>

      {/* Movie Row */}
      <div className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide space-x-3 scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 p-2 rounded-full"
      >
      </button>
    </div>
  );
};

export default MovieList;
