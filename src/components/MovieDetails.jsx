import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movieDetail = useLoaderData();

  return (
    <>
      <p className="text-2xl font-bold">{movieDetail?.title}</p>
    </>
  );
};

export default MovieDetails;
