"use client"
import { moviesList } from "./Data.js";
import MovieRow from "./movieRow";
import Header from "./header";
import React from "react";
function Home() {
  return (
    <>
      <Header />
      <div className="Row_watch">Watch</div>
      {moviesList.map((movieData) => (
        <MovieRow 
          key={movieData.movieName}
          movieData={movieData}
        />
      ))}
    </>
  );
}

export default Home;
