"use client"
import React from "react";
import Movie_row from "./movie_row";
import Add_movie from "./addmovie";
import Footer from "./footer";
function Home() {
  return (
    <>
      <Movie_row />
      <Movie_row />
      <Add_movie />
    </>
  );
}

export default Home;
