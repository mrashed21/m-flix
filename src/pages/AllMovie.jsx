import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovie = () => {
  const allMovieData = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredMovies = allMovieData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-2xl font-bold text-center my-4">All Movies</h1>

      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search movie ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-80"
        />
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movieData) => (
            <MovieCard key={movieData._id} movieData={movieData}></MovieCard>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllMovie;
