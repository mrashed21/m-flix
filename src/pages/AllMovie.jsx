import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IoIosSearch } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";
const AllMovie = () => {
  const allMovieData = useLoaderData();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchMovies = async () => {
      setTimeout(() => {
        setMovies(allMovieData);
        setLoading(false);
      }, 1000);
    };

    fetchMovies();
  }, [allMovieData]);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>All Movies</title>
      </Helmet>
      <div className="bg-purple-100 dark:bg-[#111827] py-10 min-h-screen">
        <div className="w-11/12 mx-auto ">
          <h1 className="text-2xl font-bold text-center dark:text-white">Browse All Movies</h1>
          <div className="relative dark:text-white  flex justify-center mt-6 lg:mt-0 lg:justify-end mb-6">
            <input
              type="text"
              placeholder="Search movie ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" input input-bordered w-80 dark:bg-[#1F2937]"
            />
            <span className="hidden lg:absolute lg:inline-flex right-3 top-3 text-2xl">
              <IoIosSearch />
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredMovies.length > 0 ? (
              filteredMovies.map((movieData) => (
                <MovieCard
                  key={movieData._id}
                  movieData={movieData}
                ></MovieCard>
              ))
            ) : (
              <p
                className="col-span-full
            mt-36 text-center text-gray-500 text-2xl font-medium font-Roboto"
              >
                No movies found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMovie;
