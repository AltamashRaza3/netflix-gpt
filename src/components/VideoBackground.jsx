
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
 
const trailerVideo = useSelector((store) => store.movies.trailerVideo);

useMovieTrailer(movieId);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube trailer"
        allow="autoplay; encrypted-media; picture-in-picture"
      ></iframe>

      {/* Optional: Overlay gradient/text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
