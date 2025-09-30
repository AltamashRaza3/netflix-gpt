import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, async (user) => {
     if (user) {
       await user.reload(); // refresh user data before reading

       const currentUser = auth.currentUser; // must use this to get updated profile

       dispatch(
         addUser({
           uid: currentUser.uid,
           email: currentUser.email,
           displayName: currentUser.displayName,
           photoURL: currentUser.photoURL,
         })
       );
     } else {
       dispatch(removeUser());
     }
   });

   return () => unsubscribe();
 }, [dispatch]);


  return <RouterProvider router={appRouter} />;
};

export default Body;
