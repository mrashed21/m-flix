import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";

const AddMovie = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (rate) => {
    setRating(rate);
    setValue("rating", rate, { shouldValidate: true });
  };

  const onSubmit = (data) => {
    const movieData = {
      ...data,
      email: user.email,
      addedAt: new Date().toISOString(),
    };

    fetch("https://movie-server-puce.vercel.app/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal({
            title: "Added Movie!",
            text: "Movie added successfully!",
            icon: "success",
            button: "OK",
          });
          navigate("/movie/all");
          reset();
          setRating(0);
        } else {
          swal({
            title: "Failed to Add!",
            text: "Failed to add movie!",
            icon: "error",
            button: "OK",
          });
        }
      });
  };

  const genres = ["Comedy", "Drama", "Horror", "Action", "Romance"];
  const years = ["2024", "2023", "2022", "2021", "2020"];

  return (
    <>
      <Helmet>
        <title>Add Movie</title>
      </Helmet>
      <div className="bg-purple-100 py-10">
        <div className="max-w-3xl mx-auto bg-base-100 p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            Add a New Movie
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block font-bold mb-2">Movie Title:</label>
              <input
                type="text"
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
            <div className="form-control">
              <label className="label">
                <span className="block font-bold mb-2">Movie Poster URL</span>
              </label>
              <input
                type="text"
                placeholder="Enter poster URL"
                className={`input input-bordered w-full ${
                  errors.poster ? "input-error" : ""
                }`}
                {...register("poster", {
                  required: "Poster URL is required.",
                  pattern: {
                    value:
                      /^(https?):\/\/[^\s$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)$/i,
                    message: "Please enter a valid URL",
                  },
                })}
              />
              {errors.poster && (
                <p className="text-error text-sm mt-1">
                  {errors.poster.message}
                </p>
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
                <option value="">Select Genre</option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre}>
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
                <option value="">Select Year</option>
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

            <input
              type="hidden"
              {...register("rating", {
                required: "Rating is required.",
                validate: (value) =>
                  value > 0 || "You must add at least One Star.",
              })}
            />

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

            <button className="btn btn-neutral w-full">Add Movie</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
