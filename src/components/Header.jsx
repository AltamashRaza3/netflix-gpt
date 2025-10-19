import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
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
    const unsubscribe = onAuthStateChanged(auth, async (fbUser) => {
      if (fbUser) {
        // Refresh user data to avoid stale displayName/photoURL
        await fbUser.reload();
        const currentUser = auth.currentUser;
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
      className={`absolute top-0 left-0 w-full z-10 flex items-center justify-between px-6 sm:px-12 py-4 ${
        isLoginPage ? "" : "bg-black bg-opacity-60 backdrop-blur-md"
      }`}
    >
      {/* Netflix Logo */}
      <img
        onClick={() => navigate(user ? "/browse" : "/")}
        className="w-28 sm:w-36 cursor-pointer z-20"
        src={LOGO}
        alt="Netflix Logo"
      />

      {/* Avatar + Sign Out */}
      {!isLoginPage && user && (
        <div className="flex items-center space-x-4">
          {/* ✅ Fixed: Always use fallback seed, no undefined */}
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md border border-white/30"
            alt="User avatar"
            src={user.photoURL || USER_AVATAR(user.uid || "guest")}
          />

          <button
            onClick={handleSignOut}
            className="text-white text-sm sm:text-base px-4 py-2 bg-white/10 border border-white/20 rounded hover:bg-white/20 transition"
            aria-label="Sign out of your account"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
