import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addComedyMovies } from "../utils/moviesSlice";

const useComedyMovies = () => {
  const dispatch = useDispatch();
  const comedyMovies = useSelector((store) => store.movies.comedyMovies);

  const getComedyMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?with_genres=35&sort_by=popularity.desc&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addComedyMovies(json.results));
    } catch (error) {
      console.error("Error fetching comedy movies:", error);
    }
  };

  useEffect(() => {
    if (!comedyMovies.length) getComedyMovies();
  }, [comedyMovies.length]);
};

export default useComedyMovies;
