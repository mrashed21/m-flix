import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);

  const updateMovie = useLoaderData();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(updateMovie.rating);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const updateMovieData = { ...data, rating };

    fetch(
      `https://movie-server-sepia.vercel.app/movie/update/${updateMovie._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateMovieData),
      }
    )
      .then((res) => res.json())
      .then(() => {
        swal({
          title: "Movie Update!",
          text: "Movie update Successful!",
          icon: "success",
          button: "OK",
        });

        navigate("/movie/all");
        reset();
      })
      .catch(() => {
        swal({
          title: "Update Failed",
          text: "There was an error updating the movie.",
          icon: "error",
          button: "OK",
        });
      });
  };

  const handleRatingChange = (rate) => {
    setRating(rate);
    setValue("rating", rate, { shouldValidate: true });
  };

  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance"];
  const years = ["2024", "2023", "2022", "2021", "2020"];

  return (
    <>
      <Helmet>
        <title>Update Movie</title>
      </Helmet>
      <div className="bg-purple-100 dark:bg-[#111827] py-10">
        <div className="max-w-3xl mx-auto dark:bg-[#1F2937] p-6 rounded-lg shadow-lg dark:text-white">
          <h2 className="text-2xl font-bold text-center mb-6">Update Movie</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-bold mb-2">Movie Title:</label>
              <input
                type="text"
                defaultValue={updateMovie.title}
                {...register("title", {
                  required: "Title is required.",
                  minLength: {
                    value: 2,
                    message: "Title must have at least 2 characters.",
                  },
                })}
                placeholder="Enter movie title"
                className={`input input-bordered w-full ${
                  errors.title ? "input-error" : ""
                }`}
              />
              {errors.title && (
                <span className="text-error text-sm">
                  {errors.title.message}
                </span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">
                Movie Poster (URL):
              </label>
              <input
                type="text"
                defaultValue={updateMovie.poster}
                {...register("poster", {
                  required: "Poster URL is required.",
                  pattern: {
                    value:
                      /^(https?):\/\/[^\s$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)$/i,
                    message: "Must be a valid URL.",
                  },
                })}
                placeholder="Enter poster URL"
                className={`input input-bordered w-full ${
                  errors.poster ? "input-error" : ""
                }`}
              />
              {errors.poster && (
                <span className="text-error text-sm">
                  {errors.poster.message}
                </span>
              )}
            </div>
            <div>
              <label className="block font-bold mb-2">Genre:</label>
              <select
                {...register("genre", { required: "Genre is required." })}
                className={`select select-bordered w-full ${
                  errors.genre ? "select-error" : ""
                }`}
              >
                <option value={updateMovie.genre}>{updateMovie.genre}</option>
                {genres.map((genre, index) => (
                  <option
                    key={index}
                    value={genre}
                    defaultValue={updateMovie.genre}
                  >
                    {genre}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <span className="text-error text-sm">
                  {errors.genre.message}
                </span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">
                Duration (minutes):
              </label>
              <input
                type="text"
                defaultValue={updateMovie.duration}
                {...register("duration", {
                  required: "Duration is required.",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Duration must be a number.",
                  },
                  min: {
                    value: 60,
                    message: "Duration must be greater than 60.",
                  },
                })}
                placeholder="Enter duration in minutes"
                className={`input input-bordered w-full ${
                  errors.duration ? "input-error" : ""
                }`}
              />
              {errors.duration && (
                <span className="text-error text-sm">
                  {errors.duration.message}
                </span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Release Year:</label>
              <select
                {...register("releaseYear", {
                  required: "Release year is required.",
                })}
                className={`select select-bordered w-full ${
                  errors.releaseYear ? "select-error" : ""
                }`}
              >
                <option value={updateMovie.releaseYear}>
                  {updateMovie.releaseYear}
                </option>
                {years.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.releaseYear && (
                <span className="text-error text-sm">
                  {errors.releaseYear.message}
                </span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Rating:</label>
              <div className="flex">
                <Rating
                  onClick={handleRatingChange}
                  ratingValue={rating}
                  size={24}
                  fillColor="orange"
                  emptyColor="gray"
                />
              </div>
              <p className="text-sm mt-2">Selected Rating: {rating} stars</p>
              {errors.rating && (
                <span className="text-error text-sm">
                  {errors.rating.message}
                </span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Summary:</label>
              <textarea
                {...register("summary", {
                  required: "Summary is required.",
                  minLength: {
                    value: 10,
                    message: "Summary must have at least 10 characters.",
                  },
                })}
                placeholder="Write a short summary"
                defaultValue={updateMovie.summary}
                className={`textarea textarea-bordered w-full ${
                  errors.summary ? "textarea-error" : ""
                }`}
              />
              {errors.summary && (
                <span className="text-error text-sm">
                  {errors.summary.message}
                </span>
              )}
            </div>

            <div>
              <label className="block font-bold mb-2">Email:</label>
              <input
                type="email"
                value={user.email}
                className="input input-bordered w-full"
                readOnly
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline rounded-lg dark:text-white w-full"
            >
              Update Movie
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateMovie;
