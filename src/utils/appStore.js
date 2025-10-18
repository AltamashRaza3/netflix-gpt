import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // clearer naming
import moviesReducer from "./moviesSlice";


const appStore = configureStore({
  reducer: {
    user: userReducer, // attach your slice reducer
    movies: moviesReducer,
  },
});

export default appStore;
