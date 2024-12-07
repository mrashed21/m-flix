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
    <div className="bg-purple-100 py-10 min-h-screen">
      <div className=" w-11/12 mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Favorite Movies</h1>
        {favorites.length === 0 ? (
          <p className="text-gray-500 text-center font-semibold text-3xl mt-40">You have no favorite movies yet.</p>
        ) : (
          <ul className="space-y-4">
            {favorites.map((movie) => (
              <div
                key={movie.movieId}
                className="flex items-center space-x-4 bg-base-100 shadow-md p-4 rounded-xl"
              >
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-52 w-48 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{movie.title}</h3>
                  <p className=" text-gray-600">
                    {" "}
                    <span className="font-medium"> Genre</span>: {movie.genre}
                  </p>
                  <p className=" text-gray-600">
                    <span className="font-medium"> Release Year</span>:{" "}
                    {movie.releaseYear}
                  </p>
                  <p className=" text-gray-600">
                    <span className="font-medium"> Discription</span>
                    <p className="pl-1">{movie.summary}</p>
                  </p>
                  <button
                    onClick={() => handleDeleteFavorite(movie.movieId)}
                    className="btn btn-error w-full mt-3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MyFavorite;
