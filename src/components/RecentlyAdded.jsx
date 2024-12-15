import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyAdded = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://movie-server-puce.vercel.app/movie/recent")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error fetching recent movies:", err));
  }, []);

  return (
    <div className="dark:#1F2937">
      <div className="w-11/12 mx-auto p-4 my-10 ">
        <h2 className="text-2xl font-bold mb-4">Recently Added Movie</h2>
        <ul className="space-y-4">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="flex flex-col lg:flex-row lg:items-center space-x-4 bg-base-100 dark:bg-[#111827] dark:text-white shadow p-3 rounded-lg"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-52 lg:h-24 w-full lg:w-28 object-cover rounded"
              />
              <div className="mt-2 lg:mt-0 flex-1">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className=" text-gray-600 dark:text-gray-300">
                  <span className="font-medium"> Genre</span>: {movie.genre}
                </p>
                <p className=" text-gray-600 dark:text-gray-300">
                  <span className="font-medium"> Release Year</span>:{" "}
                  {movie.releaseYear}
                </p>
                <p className=" text-gray-500 dark:text-gray-300">
                  <span className="font-medium"> Added On</span>:{" "}
                  {new Date(movie.addedAt).toLocaleString()}
                </p>
              </div>
              <Link
                to={`/movie/details/${movie._id}`}
                className="btn btn-outline btn-md mt-3 lg:mt-0 dark:text-white"
              >
                View Details
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentlyAdded;
