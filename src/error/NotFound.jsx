import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-100">
      <div className="text-center">
        <h1 className="text-8xl font-bold ">404</h1>
        <h2 className="text-4xl font-bold mt-4">Oops! Page not found.</h2>
        <p className="text-lg mt-4">
          The page you are looking for doesnot exist or has been moved.
        </p>
        <div className="mt-3">
          <Link to="/">
            <button className="btn btn-outline">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
