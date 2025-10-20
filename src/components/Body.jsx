import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {
  // Tell the router about your app base path
  const appRouter = createBrowserRouter(
    [
      { path: "/", element: <Login /> },
      { path: "/browse", element: <Browse /> },
    ],
    {
      basename: "/netflix-gpt", // <-- important for deployment under subpath
    }
  );

  return <RouterProvider router={appRouter} />;
};

export default Body;
