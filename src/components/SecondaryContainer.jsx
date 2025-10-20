import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useComedyMovies from "../hooks/useComedyMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  // Call all hooks to fetch data
  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useComedyMovies();
  useHorrorMovies();
 
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-30 pl-4 md:pl-12 relative z-20 space-y-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.trendingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Comedy"} movies={movies.comedyMovies} />
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
