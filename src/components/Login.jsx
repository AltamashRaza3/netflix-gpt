import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";
import {auth} from "../utils/firebase";
import {useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const  navigate= useNavigate();

  const handleButtonClick = () => {
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";

    const message = checkValidate(emailValue, passwordValue);
    setErrorMessage(message);
    if(message)return;

    //Sign In/ Sign Up Logic
    if(!isSignInForm){
      createUserWithEmailAndPassword(
        auth,
        emailValue,
        passwordValue
      )
        .then((userCredential) => {
          // Signed up
          const user = name.current.value;
          updateProfile(user, {
            displayName: "Jane Q. User",
            photoURL: "https://avatars.githubusercontent.com/u/126352413?v=4",
          })
            .then(() => {
              // Profile updated!
              navigate("/browse")
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage(
              "This email is already registered, please sign in."
            );
            setIsSignInForm(true);
          } else {
            setErrorMessage(error.message);
          }
        });
      }
      else{
        // Sign in Logic
        signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/browse")
          })
          .catch((error) => {
            if (error.code === "auth/wrong-password") {
              setErrorMessage(
                "Incorrect Email and Password."
              );
              setIsSignInForm(true);
            } else {
              setErrorMessage(error.message);
            }
          });
      }

    }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null); // clear errors when switching forms
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

      {/* Auth Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 -translate-x-1/2 -translate-y-1/2 bg-black/80 p-10 rounded-lg text-white shadow-lg"
      >
        <h1 className="font-bold text-3xl mb-6">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
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
          className="py-3 w-full bg-red-600 hover:bg-red-700 rounded-md font-semibold cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        {/* Error Message */}
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
          This page is protected by Google reCAPTCHA to ensure you’re not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
