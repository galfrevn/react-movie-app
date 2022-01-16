import React from "react";
import Movie from "./components/Movie";
import { useState, useEffect } from "react";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=52ceeb592923ebd4b54854c874873eac&page=1";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=52ceeb592923ebd4b54854c874873eac&query=";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(FEATURED_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });

    setMovies(movies);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm == "") {
      movies = fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    } else {
      fetch(SEARCH_API + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-screen bg-blue-300 py-4 px-10">
        <div className="container">
          <form onSubmit={handleOnSubmit}>
            <input
              type="text"
              value={searchTerm}
              placeholder="Search some movies..."
              onChange={handleOnChange}
              className="w-2/3 md:w-1/3 bg-white appearance-none border-2 border-white rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none "
            />
          </form>
        </div>
      </nav>

      <div className="mt-16 min-h-screen py-12 px-10 bg-blue-200">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-5 xl:grid-cols-5 gap-y-5 gap-x-4 ">
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </div>
      </div>
    </>
  );
}
