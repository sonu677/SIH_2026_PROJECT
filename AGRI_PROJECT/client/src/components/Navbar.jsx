import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl">
            🌱
          </div>

          <div>
            <h1 className="text-xl font-bold text-green-700">
              AGRI
            </h1>
            <p className="text-xs text-gray-500">
              Smart Agriculture
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            to="/dashboard"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/crop-recommendation"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Crop Recommendation
          </Link>

          <Link
            to="/disease-detection"
            className="text-gray-700 hover:text-green-600 transition"
          >
            Disease Detection
          </Link>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 text-green-700 font-medium hover:bg-green-50 rounded-lg"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;