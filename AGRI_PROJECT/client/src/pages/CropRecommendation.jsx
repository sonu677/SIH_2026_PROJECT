import { useState } from "react";

const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
    rainfall: "",
    ph: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later this data will be sent to Express + ML model
    console.log(formData);

    setResult("🌾 Recommendation will appear here after connecting the AI model.");
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700">
          🌾 Crop Recommendation
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Enter your soil and environmental conditions.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-md"
        >

          <div className="grid md:grid-cols-2 gap-5">

            {[
              ["nitrogen", "Nitrogen (N)"],
              ["phosphorus", "Phosphorus (P)"],
              ["potassium", "Potassium (K)"],
              ["temperature", "Temperature (°C)"],
              ["humidity", "Humidity (%)"],
              ["rainfall", "Rainfall (mm)"],
              ["ph", "Soil pH"],
            ].map(([name, label]) => (
              <div key={name}>
                <label className="block font-medium mb-2">
                  {label}
                </label>

                <input
                  type="number"
                  step="any"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
                />
              </div>
            ))}

          </div>

          <button
            type="submit"
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Get Recommendation
          </button>

        </form>

        {result && (
          <div className="mt-6 bg-white p-6 rounded-xl border border-green-200">
            <h2 className="font-bold text-xl text-green-700">
              Recommendation
            </h2>

            <p className="text-gray-600 mt-2">
              {result}
            </p>
          </div>
        )}

      </div>

    </div>
  );
};

export default CropRecommendation;