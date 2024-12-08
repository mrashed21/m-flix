import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FeaturedMovieCard from "./FeaturedMovieCard";
const FeaturedMovie = () => {
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://movie-server-puce.vercel.app/movie/featured")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="bg-purple-100 dark:bg-[#111827]">
      <div className="w-11/12 mx-auto px-6 py-10 ">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">Featured Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <FeaturedMovieCard key={movie._id} movie={movie} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => navigate("/movie/all")}
            className="btn btn-outline w-1/2 dark:text-white"
          >
            See All Movies
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
