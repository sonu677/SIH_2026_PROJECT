import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center">
              🌱
            </div>

            <h2 className="text-2xl font-bold">
              AGRI
            </h2>
          </div>

          <p className="text-gray-400 leading-relaxed">
            Smart agriculture solutions helping farmers make
            better decisions using technology and data.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>

            <Link to="/dashboard" className="hover:text-green-400">
              Dashboard
            </Link>

            <Link to="/crop-recommendation" className="hover:text-green-400">
              Crop Recommendation
            </Link>

            <Link to="/disease-detection" className="hover:text-green-400">
              Disease Detection
            </Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Services
          </h3>

          <div className="flex flex-col gap-3 text-gray-400">
            <span>🌾 Crop Recommendation</span>
            <span>🦠 Disease Detection</span>
            <span>🌦 Weather Information</span>
            <span>💰 Market Prices</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">
            <p>📧 support@agri.com</p>
            <p>📞 +91 00000 00000</p>
            <p>📍 India</p>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-gray-500">
          © {new Date().getFullYear()} AGRI. All rights reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;