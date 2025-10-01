import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"; 
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get current user from Redux
  const user = useSelector((state) => state.user);

  const handleAuth = async () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";
    const nameValue = name.current?.value || "";

    const message = checkValidate(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    setLoading(true);
    try {
      if (!isSignInForm) {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );
        await updateProfile(userCredential.user, {
          displayName: nameValue,
          photoURL: "https://avatars.githubusercontent.com/u/126352413?v=4",
        });
        dispatch(addUser(auth.currentUser));
      } else {
        // Sign In
        await signInWithEmailAndPassword(auth, emailValue, passwordValue);
        dispatch(addUser(auth.currentUser));
      }

      navigate("/browse");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("This email is already registered, please sign in.");
        setIsSignInForm(true);
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect Email and Password.");
      } else {
        setErrorMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await auth.signOut();
    dispatch(removeUser());
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
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
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Header */}
      <Header />

      {/* Avatar & Sign Out Button */}
      <div className="absolute top-3 right-6 flex items-center space-x-4 z-20">
        <img
          src={
            user?.photoURL ||
            "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          }
          alt="Avatar"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-md ring-1 ring-white/20"
        />
        {user && (
          <button
            onClick={handleSignOut}
            className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        )}
      </div>

      {/* Auth Form */}
      {!user && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute top-1/2 left-1/2 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-10 rounded-lg text-white shadow-lg"
        >
          <h1 className="font-bold text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 w-full rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 mb-4 w-full rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-6 w-full rounded-md bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600"
          />

          <button
            type="button"
            disabled={loading}
            className={`py-3 w-full bg-red-600 rounded-md font-semibold cursor-pointer hover:bg-red-700 transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleAuth}
          >
            {loading ? "Processing..." : isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
          )}

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

          <p className="mt-8 text-gray-400 text-sm">
            {isSignInForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <button
              type="button"
              className="text-white hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              {isSignInForm ? "Sign up now" : "Sign in"}
            </button>
          </p>

          <p className="mt-4 text-xs text-gray-500 leading-relaxed">
            This page is protected by Google reCAPTCHA to ensure you’re not a
            bot.
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;
