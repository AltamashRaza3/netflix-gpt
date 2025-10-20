import React from "react";

const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 flex-shrink-0 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out">
      <img
        src={IMG_CDN + posterPath}
        alt="Movie Poster"
        className="w-full h-auto rounded-md object-cover"
      />
    </div>
  );
};

export default MovieCard;
