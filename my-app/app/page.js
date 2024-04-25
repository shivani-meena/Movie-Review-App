"use client"
import React, { useState } from "react";
import Movie_row from "./movie_row";
import Add_movie from "./addmovie";
import Header from "./header";
import { initialMovieList } from "./data.js";

function Home() {
  const [movies, setMovies] = useState(initialMovieList);
  console.log("start of page component", movies);

  function handleLike(id) {
    let updated_movies = movies.map(function (movie) {
      if (movie.id === id) {
        return { ...movie, vote: movie.vote + 1 }
      }
      return movie;
    });

    sortMovies(updated_movies);
  }

  function handleDislike(id) {
    console.log("start of dislike function", movies);
    let updated_movies = movies.map(function (movie) {
      if (movie.id === id) {
        return { ...movie, vote: movie.vote - 1 }
      }
      return movie;
    });

    console.log("end of dislike function", updated_movies);
    sortMovies(updated_movies);
  }


  function handleDelete(index) {
    let remaining_movies = movies.filter(function (movie) {
      return movie.id !== index;
    });

    setMovies(remaining_movies);
  }

  function sortMovies(updated_movies) {
    console.log("start of sort function", movies);
    let new_movies = updated_movies.sort(function (a, b) {
      return b.vote - a.vote;
    });

    setMovies(new_movies);
  }

  return (
    <>
      <Header
        setMovies={setMovies}
        movies={movies}
      />
      <div className="container main-container">
        <div className="row">
          {movies.map(function (movie) {
            return (
              <Movie_row
                key={movie.id}
                movie={movie}
                handleLike={() => handleLike(movie.id)}
                handleDislike={() => handleDislike(movie.id)}
                handleDelete={() => handleDelete(movie.id)}
                vote={movie.vote}
              />
            );
          })}
        </div>
        <Add_movie />
      </div>
    </>
  );
}

export default Home;
