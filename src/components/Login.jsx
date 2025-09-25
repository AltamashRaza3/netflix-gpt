import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/bebd95d0-65f9-41a9-9d12-4794db63653e/web/IN-en-20250922-TRIFECTA-perspective_5e75cfb4-3797-4f17-866b-181ff91a51dd_large.jpg"
          alt="bg-image"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Auth Form */}
      <form className="absolute top-1/2 left-1/2 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-10 rounded-lg text-white shadow-lg">
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Show Name field only in Sign Up */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-4 w-full rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 mb-4 w-full rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="p-3 mb-6 w-full rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
        />

        {/* Button */}
        <button className="py-3 w-full bg-red-600 hover:bg-red-700 rounded-md font-semibold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Extra Options (only show on Sign In) */}
        {isSignInForm && (
          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-red-600" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        )}

        {/* Toggle between Sign In / Sign Up */}
        <p className="mt-8 text-gray-400 text-sm">
          {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm ? "Sign up now" : "Sign in"}
          </span>
        </p>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-gray-500 leading-relaxed">
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
