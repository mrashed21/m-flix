/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const addMovie = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((movie) => movie._id !== id));
  };

  return (
    <MovieContext.Provider value={{ movies, setMovies, addMovie, deleteMovie }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
