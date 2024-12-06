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
        <p className="text-sm text-gray-600">Genre: {movie.genre}</p>
        <p className="text-sm text-gray-600">Duration: {movie.duration} min</p>
        <p className="text-sm text-gray-600">
          Release Year: {movie.releaseYear}
        </p>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Rating:</span>
          <ReactStars
            count={5}
            value={parseFloat(movie.rating)}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </div>
        <div className="card-actions justify-end">
          <Link to={`/movie/details/${movie._id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovieCard;
