
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import ReactStars from "react-rating-stars-component";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";

const MyFavorite = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://movie-server-puce.vercel.app/movie/favorites/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDeleteFavorite = (movieId) => {
    fetch(
      `https://movie-server-puce.vercel.app/movie/favorites/${user.email}/${movieId}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then(() => {
        swal({
          title: "Removed Movie!",
          text: "Movie removed successfully from favorites!",
          icon: "success",
          button: "OK",
        });

        setFavorites((prev) =>
          prev.filter((movie) => movie.movieId !== movieId)
        );
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Favorite Movies</title>
      </Helmet>
      <div className="bg-purple-100 py-10 min-h-screen">
        <div className="w-11/12 mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            My Favorite Movies
          </h1>
          {favorites.length === 0 ? (
            <p className="text-gray-500 text-center font-semibold text-3xl mt-40">
              You have no favorite movies yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((movie) => (
                <div
                  key={movie.movieId}
                  className="flex flex-col bg-base-100 shadow-md p-4 rounded-xl"
                >
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-52 w-full object-cover rounded-lg mb-4"
                  />
                  <div className="flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg">{movie.title}</h3>
                    <p className="text-gray-600">
                      <span className="font-medium">Genre:</span> {movie.genre}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Duration:</span>{" "}
                      {movie.duration}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Release Year:</span>{" "}
                      {movie.releaseYear}
                    </p>
                    <p className="text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Rating:</span>
                        <ReactStars
                          count={5}
                          value={movie.rating}
                          size={20}
                          activeColor="#ffd700"
                          edit={false}
                        />
                      </div>
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteFavorite(movie.movieId)}
                    className="btn btn-error w-full mt-auto"
                  >
                    Delete Favorite
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyFavorite;
