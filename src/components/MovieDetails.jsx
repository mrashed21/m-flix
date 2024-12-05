import { useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const MovieDetails = () => {
  const movieDetail = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/movie/details/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          navigate("/movie/all");
        }
      });
  };
  // console.log(movieDetail?.email, user?.email);
  return (
    <>
      <div className="card bg-base-100 shadow-xl p-4 w-full max-w-sm mx-auto">
        <figure className="rounded-lg">
          <img
            src={movieDetail.poster}
            alt={movieDetail.title}
            className="h-64 w-full rounded-lg object-cover"
          />
        </figure>
        <div className="card-body p-0 mt-3">
          <h2 className="card-title">{movieDetail.title}</h2>
          <p className="text-sm text-gray-600">Genre: {movieDetail.genre}</p>
          <p className="text-sm text-gray-600">
            Duration: {movieDetail.duration} min
          </p>
          <p className="text-sm text-gray-600">
            Release Year: {movieDetail.releaseYear}
          </p>
          <p className="text-sm text-gray-600 mt-2">{movieDetail.summary}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="font-semibold">Rating:</span>
            <ReactStars
              count={5}
              value={movieDetail.rating}
              size={20}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
          <div className="card-actions justify-between mt-4">
            {movieDetail?.email === user?.email ? (
              <button className="btn btn-secondary">Update</button>
            ) : (
              <button disabled className="btn btn-secondary">
                Update
              </button>
            )}
            {movieDetail?.email === user?.email ? (
              <button
                onClick={() => {
                  handleDelete(movieDetail._id);
                }}
                className="btn btn-secondary"
              >
                Delete
              </button>
            ) : (
              <button disabled className="btn btn-secondary">
                Delete
              </button>
            )}

            <button className="btn btn-secondary">Favorite</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
