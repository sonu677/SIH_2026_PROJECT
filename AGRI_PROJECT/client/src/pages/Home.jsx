import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-green-50">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
              🌱 Smart Agriculture Platform
            </span>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Smart Farming.
              <span className="text-green-600"> Better Future.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              AGRI helps farmers make smarter decisions using crop
              recommendations, disease detection, weather information,
              market prices and government schemes.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/register"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
              >
                Get Started →
              </Link>

              <Link
                to="/dashboard"
                className="border border-green-600 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100"
              >
                Explore Dashboard
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="bg-white rounded-3xl shadow-xl p-10">
            <div className="text-center text-8xl mb-6">
              🌾
            </div>

            <h2 className="text-2xl font-bold text-center text-gray-800">
              Technology for Modern Farming
            </h2>

            <p className="text-center text-gray-500 mt-3">
              Data-driven decisions for healthier crops and better yields.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Everything Farmers Need
            </h2>

            <p className="text-gray-500 mt-3">
              Powerful tools available in one platform.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              ["🌾", "Crop Recommendation", "Find suitable crops based on soil and weather conditions.", "/crop-recommendation"],
              ["🦠", "Disease Detection", "Detect crop diseases using AI-powered image analysis.", "/disease-detection"],
              ["🌦️", "Weather", "Get weather information useful for farming decisions.", "/weather"],
              ["💰", "Market Prices", "Check crop market prices and make better selling decisions.", "/market-prices"],
            ].map(([icon, title, description, link]) => (
              <Link
                to={link}
                key={title}
                className="p-6 rounded-2xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="text-4xl mb-4">{icon}</div>

                <h3 className="font-bold text-lg">
                  {title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;







// export default Home;

// import { useEffect, useState } from "react";
// import api from "../services/api";

// const Home = () => {
//   const [message, setMessage] = useState("Connecting to server...");

//   useEffect(() => {
//     const testServer = async () => {
//       try {
//         const response = await api.get("/test");

//         setMessage(response.data.message);
//       } catch (error) {
//         console.error("Server connection error:", error);

//         setMessage("❌ Cannot connect to server");
//       }
//     };

//     testServer();
//   }, []);

//   return (
//     <div className="min-h-screen bg-green-50 flex items-center justify-center">
//       <div className="bg-white p-10 rounded-2xl shadow-lg text-center">

//         <div className="text-6xl mb-5">
//           🌱
//         </div>

//         <h1 className="text-3xl font-bold text-green-700">
//           AGRI
//         </h1>

//         <p className="mt-4 text-gray-600">
//           {message}
//         </p>

//       </div>
//     </div>
//   );
// };

// export default Home;