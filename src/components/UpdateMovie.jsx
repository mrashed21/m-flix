import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const UpdateMovie = () => {
  const { user } = useContext(AuthContext);
  const updateMovie = useLoaderData();
  console.log(updateMovie);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(updateMovie.rating);
  const onSubmit = (data) => {
    const updateMovieData = { ...data, rating };
    console.log(updateMovieData);
    fetch(`http://localhost:5000/movie/update/${updateMovie._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateMovieData),
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        console.log("Movie successfull update:", result);
        toast.success("Movie added update!");
        reset();
      });
  };

  const handleRatingChange = (rate) => {
    setRating(rate);
    setValue("rating", rate, { shouldValidate: true });
  };
  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance"];
  const years = ["2024", "2023", "2022", "2021", "2020"];

  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Update Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-bold mb-2">Movie Poster (URL):</label>
          <input
            type="text"
            defaultValue={updateMovie.poster}
            {...register("poster", {
              required: "Poster URL is required.",
              pattern: {
                // value: /^https?:\/\/.+/,
                message: "Must be a valid URL.",
              },
            })}
            placeholder="Enter poster URL"
            className={`input input-bordered w-full ${
              errors.poster ? "input-error" : ""
            }`}
          />
          {errors.poster && (
            <span className="text-error text-sm">{errors.poster.message}</span>
          )}
        </div>

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
            <span className="text-error text-sm">{errors.title.message}</span>
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
            <span className="text-error text-sm">{errors.genre.message}</span>
          )}
        </div>

        <div>
          <label className="block font-bold mb-2">Duration (minutes):</label>
          <input
            type="number"
            defaultValue={updateMovie.duration}
            {...register("duration", {
              required: "Duration is required.",
              min: { value: 60, message: "Duration must be greater than 60." },
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
            <span className="text-error text-sm">{errors.rating.message}</span>
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
            <span className="text-error text-sm">{errors.summary.message}</span>
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

        <button type="submit" className="btn btn-primary w-full">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default UpdateMovie;