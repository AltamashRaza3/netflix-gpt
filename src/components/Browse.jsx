import React, { useEffect } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Browse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/"); // Redirect to homepage if not logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <Header />
      {/* Your browse content goes here */}
    </div>
  );
};

export default Browse;
