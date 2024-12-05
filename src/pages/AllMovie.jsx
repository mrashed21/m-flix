import { useLoaderData } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const AllMovie = () => {
  const allMovieData = useLoaderData();
  return (
    <div>
      this is all movie page
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allMovieData.map((movieData) => (
          <MovieCard key={movieData._id} movieData={movieData}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovie;
