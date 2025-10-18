import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
  const navigate = useNavigate();

  useEffect(() => {
    // Correct dependency: only navigates or fetches when auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/"); // redirect if logged out
      } 
    });

    // Proper cleanup to avoid observer leaks
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* Movie components will be rendered here 
        Main container
          - video background
          - Video Title
        Secondary Container
          - MoviesList * n
            - cards * n 
      */}

    </div>
  );
};

export default Browse;
