import { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../provider/AuthProvider";

const MyFavorite = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/movie/favorites/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setFavorites(data);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDeleteFavorite = (movieId) => {
    fetch(`http://localhost:5000/movie/favorites/${user.email}/${movieId}`, {
      method: "DELETE",
    })
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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">You have no favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <div key={movie.movieId} className="card bg-base-100 shadow-lg p-4">
              <figure className="rounded-lg">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-48 w-full object-cover rounded-lg"
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="text-lg font-semibold">{movie.title}</h2>
                <p className="text-sm text-gray-500">{movie.genre}</p>
                <p className="text-sm text-gray-500">
                  Release Year: {movie.releaseYear}
                </p>
                <div className="card-actions justify-end mt-2">
                  <button
                    onClick={() => handleDeleteFavorite(movie.movieId)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFavorite;
