import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */
const MovieCard = ({ movieData }) => {
  return (
    <>
      <div className="card bg-base-100 dark:bg-[#1F2937] dark:text-white shadow-xl p-4">
        <figure className="rounded-lg">
          <img
            src={movieData.poster}
            alt={movieData.title}
            className="h-52 w-full rounded-lg object-cover"
          />
        </figure>
        <div className="card-body p-0 mt-3">
          <h2 className="card-title">{movieData.title}</h2>
          <p className=" text-gray-600 dark:text-gray-300">
            <span className="font-medium"> Genre</span>: {movieData.genre}
          </p>
          <p className=" text-gray-600 dark:text-gray-300">
            <span className="font-medium">Duration</span>: {movieData.duration}{" "}
            min
          </p>
          <p className=" text-gray-600 dark:text-gray-300">
            <span className="font-medium"> Release Year</span>:{" "}
            {movieData.releaseYear}
          </p>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>
            <ReactStars
              count={5}
              value={parseFloat(movieData.rating)}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>

          <div className="w-full ">
            <Link to={`/movie/details/${movieData._id}`}>
              <button className="btn btn-outline w-full dark:text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
