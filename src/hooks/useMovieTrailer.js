import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const data = await res.json();

        const trailer =
          data.results.find((video) => video.type === "Trailer") ||
          data.results[0];
        dispatch(addTrailerVideo(trailer));
      } catch (err) {
        console.error("Error fetching trailer:", err);
      }
    };

    getMovieVideos();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
