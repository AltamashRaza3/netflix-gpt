import React from "react";
import {signOut,auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate= useNavigate;
  const handleSignOut = () =>{
    signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <div className="flex items-center justify-between px-6 sm:px-10 py-3 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        {/* Left: Netflix Logo */}
          <img
            className="w-28 sm:w-36 select-none"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="Netflix"
          />

        {/* User avatar */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-md ring-1 ring-white/20 hover:ring-white/40 transition"
            alt="User avatar"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
          />
          <button onClick={handleSignOut} className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/20 transition">
           Sign Out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


