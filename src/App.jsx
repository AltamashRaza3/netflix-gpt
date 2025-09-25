// src/App.jsx
import React from "react";

const movies = [
  {
    id: 1,
    title: "Stranger Things",
    img: "https://occ-0-1557-92.1.nflxso.net/art/d3f39/5a79edaae401f04d385b6d7a4a5d3f398c3d3f39.jpg",
  },
  {
    id: 2,
    title: "The Witcher",
    img: "https://occ-0-1557-92.1.nflxso.net/art/fc8b8/2b614e4401c417fa985a2e5ee9cafcb1919fc8b8.jpg",
  },
  {
    id: 3,
    title: "Narcos",
    img: "https://occ-0-1557-92.1.nflxso.net/art/0c6c1/bf18d8fbd77966c6786b8947e63a6bc99f80c6c1.jpg",
  },
  {
    id: 4,
    title: "Ozark",
    img: "https://occ-0-1557-92.1.nflxso.net/art/bb9b1/4bd58dcace8e37e992a8183f61f47679b52bb9b1.jpg",
  },
];

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between p-5 bg-transparent fixed w-full top-0 z-50">
        <h1 className="text-3xl font-bold cursor-pointer">Netflix GPT</h1>
        <nav className="space-x-6">
          <button className="hover:text-red-600">Home</button>
          <button className="hover:text-red-600">TV Shows</button>
          <button className="hover:text-red-600">Movies</button>
          <button className="hover:text-red-600">My List</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative mt-20 px-8 py-16 bg-gradient-to-b from-black to-transparent">
        <div className="max-w-5xl">
          <h2 className="text-5xl font-extrabold mb-4">
            Welcome to Netflix GPT
          </h2>
          <p className="text-gray-300 max-w-xl mb-8">
            Explore movies and shows with AI recommendations powered by GPT.
          </p>
          <button className="bg-red-600 px-6 py-3 font-semibold rounded hover:bg-red-700">
            Get Started
          </button>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="p-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6">Popular on Netflix GPT</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="rounded-lg w-full h-auto object-cover"
              />
              <h4 className="mt-2 text-lg font-semibold">{movie.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
