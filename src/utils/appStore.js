import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // clearer naming

const appStore = configureStore({
  reducer: {
    user: userReducer, // attach your slice reducer
  },
});

export default appStore;
