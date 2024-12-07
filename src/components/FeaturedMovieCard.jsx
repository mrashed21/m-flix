/* eslint-disable react/prop-types */

import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const FeaturedMovieCard = ({ movie }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure className="rounded-lg">
        <img
          src={movie.poster}
          alt={movie.title}
          className="h-64 w-full rounded-lg object-cover"
        />
      </figure>
      <div className="card-body p-0 mt-3">
        <h2 className="card-title">{movie.title}</h2>
        <p className=" text-gray-600">
          <span className="font-medium"> Genre</span>: {movie.genre}
        </p>
        <p className=" text-gray-600">
          <span className="font-medium">Duration</span>: {movie.duration} min
        </p>
        <p className=" text-gray-600">
          <span className="font-medium"> Release Year</span>:{" "}
          {movie.releaseYear}
        </p>
        <div className="flex items-center gap-5">
          <span className="font-semibold">Rating:</span>
          <ReactStars
            count={5}
            value={parseFloat(movie.rating)}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <div className="w-full ">
          <Link to={`/movie/details/${movie._id}`}>
            <button className="btn btn-outline w-full">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;
