import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Oops! Page not found.</p>
      <Link to="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
