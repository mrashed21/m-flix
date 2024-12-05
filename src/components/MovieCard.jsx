import ReactStars from "react-rating-stars-component";
/* eslint-disable react/prop-types */
const MovieCard = ({ movieData }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl p-4">
        <figure className="rounded-lg">
          <img
            src={movieData.poster}
            alt={movieData.title}
            className="h-64 w-full rounded-lg object-cover"
          />
        </figure>
        <div className="card-body p-0 mt-3">
          <h2 className="card-title">{movieData.title}</h2>
          <p className="text-sm text-gray-600">Genre: {movieData.genre}</p>
          <p className="text-sm text-gray-600">
            Duration: {movieData.duration} min
          </p>
          <p className="text-sm text-gray-600">
            Release Year: {movieData.releaseYear}
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
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
