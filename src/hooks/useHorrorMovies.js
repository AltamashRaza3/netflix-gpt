import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice";

const useHorrorMovies = () => {
  const dispatch = useDispatch();
  const horrorMovies = useSelector((store) => store.movies.horrorMovies);

  const getHorrorMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?with_genres=27&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addHorrorMovies(json.results));
    } catch (error) {
      console.error("Error fetching horror movies:", error);
    }
  };

  useEffect(() => {
    if (!horrorMovies.length) getHorrorMovies();
  }, [horrorMovies.length]);
};

export default useHorrorMovies;
