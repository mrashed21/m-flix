import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";
const MovieDetails = () => {
  const movieDetail = useLoaderData();

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const handleDelete = (_id) => {
    setSpinner(true);
    fetch(`https://movie-server-puce.vercel.app/movie/details/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          swal({
            title: "Movie Deleted!",
            text: "Movie Deleted Successfull!",
            icon: "success",
            button: "OK",
          });
          navigate("/movie/all");
        }
      })
      .catch(() => {
        setSpinner(false);
      });
  };

  const handleFavorite = (movie) => {
    const email = user?.email;
    const favoriteData = {
      email,
      movieId: movie._id,
      title: movie.title,
      poster: movie.poster,
      genre: movie.genre,
      releaseYear: movie.releaseYear,
      duration: movie.duration,
      rating: movie.rating,
      summary: movie.summary,
    };

    fetch(`https://movie-server-puce.vercel.app/movie/favorites/${email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favoriteData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.exists) {
          swal({
            title: "Faild to Add!",
            text: "This movie is already in your favorites!",
            icon: "error",
            button: "OK",
          });
        } else {
          swal({
            title: "Added Successfully",
            text: "Added to favorites successfully!",
            icon: "success",
            button: "OK",
          });
        }
      });
  };

  return (
    <>
      <Helmet>
        <title> Movie Details</title>
      </Helmet>
      {spinner ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="bg-purple-100 py-10">
          <div className="w-10/12 mx-auto">
            <div className="card lg:flex-row bg-base-100 shadow-xl p-4 w-full mx-auto gap-5">
              <figure className="rounded-lg w-full lg:w-1/2">
                <img
                  src={movieDetail.poster}
                  alt={movieDetail.title}
                  className="h-96 w-full rounded-lg object-cover"
                />
              </figure>
              <div className="card-body p-0 w-full lg:w-1/2">
                <h2 className="card-title">{movieDetail.title}</h2>
                <p className=" text-gray-600">
                  <span className="font-medium"> Genre</span>:{" "}
                  {movieDetail.genre}
                </p>
                <p className=" text-gray-600">
                  <span className="font-medium">Duration</span>:{" "}
                  {movieDetail.duration} min
                </p>
                <p className=" text-gray-600">
                  <span className="font-medium"> Release Year</span>:{" "}
                  {movieDetail.releaseYear}
                </p>
                <p className=" text-gray-600">
                  <span className="font-medium"> Discription</span>:
                  <p> {movieDetail.summary}</p>
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Rating:</span>
                  <ReactStars
                    count={5}
                    value={movieDetail.rating}
                    size={20}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </div>
                <div className="card-actions flex-col lg:flex-row justify-between mt-4">
                  <Link
                    to={`/movie/update/${movieDetail._id}`}
                    className="hover:bg-gray-300 px-5  border-2 border-black text-lg font-medium rounded-md py-2 w-full lg:w-fit text-center"
                  >
                    <button>Update</button>
                  </Link>

                  <button
                    onClick={() => {
                      handleDelete(movieDetail._id);
                    }}
                    className="hover:bg-error px-5  border-2 border-black text-lg font-medium rounded-md py-2 w-full lg:w-fit "
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => handleFavorite(movieDetail)}
                    className="hover:bg-success px-5  border-2 border-black text-lg font-medium rounded-md py-2 w-full lg:w-fit"
                  >
                    Favorite
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
          <button
            onClick={() => navigate("/movie/all")}
            className="btn btn-outline w-1/2"
          >
            See All Movies
          </button>
        </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
