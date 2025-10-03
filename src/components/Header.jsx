import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch= useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);

  const isLoginPage = location.pathname === "/";

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };
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
  return (
    <header
      className={`absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 sm:px-12 py-4
        ${isLoginPage ? "" : "bg-black bg-opacity-60 backdrop-blur-md"}`}
    >
      {/* Netflix Logo */}
      <img
        onClick={() => navigate(user ? "/browse" : "/")}
        className="w-28 sm:w-36 cursor-pointer z-20"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />

      {/* Avatar + Sign Out (only if user is logged in and not on login page) */}
      {!isLoginPage && user && (
        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md border border-white/30"
            alt="User avatar"
            src={
              user?.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
          />
          <button
            onClick={handleSignOut}
            className="text-white text-sm sm:text-base px-4 py-2 bg-white/10 border border-white/20 rounded hover:bg-white/20 transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
