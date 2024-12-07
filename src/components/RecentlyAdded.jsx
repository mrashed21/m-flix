import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/movie/recent")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching recent movies:", err));
  }, []);

  return (
    <div className="w-11/12 mx-auto p-4 my-10">
      <h2 className="text-2xl font-bold mb-4">Recently Added Movie</h2>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="flex items-center space-x-4 bg-base-100 shadow p-3 rounded-lg"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="h-24 w-28 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{movie.title}</h3>
              <p className=" text-gray-600">
                <span className="font-medium"> Genre</span>:: {movie.genre}
              </p>
              <p className=" text-gray-600">
                <span className="font-medium"> Release Year</span>:{" "}
                {movie.releaseYear}
              </p>
              <p className=" text-gray-500">
                <span className="font-medium"> Added On</span>:{" "}
                {new Date(movie.addedAt).toLocaleString()}
              </p>
            </div>
            <Link
              to={`/movie/details/${movie._id}`}
              className="btn btn-outline btn-md"
            >
              View Details
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecentlyAdded;
