import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedMovieCard from "./FeaturedMovieCard";
const FeaturedMovie = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/movie/featured")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Featured Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <FeaturedMovieCard key={movie._id} movie={movie} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button
          onClick={() => navigate("/movie/all")}
          className="btn btn-primary"
        >
          See All Movies
        </button>
      </div>
    </div>
  );
};

export default FeaturedMovie;
