const Weather = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-green-700">
          🌦️ Weather Information
        </h1>

        <p className="text-gray-600 mt-2 mb-8">
          Weather information to help plan your farming activities.
        </p>

        <div className="bg-white rounded-2xl shadow-md p-8">

          <div className="flex justify-between items-center">

            <div>
              <p className="text-gray-500">
                Current Location
              </p>

              <h2 className="text-2xl font-bold mt-1">
                Your Location
              </h2>
            </div>

            <div className="text-6xl">
              ☀️
            </div>

          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-5">

            <div className="bg-blue-50 p-5 rounded-xl">
              <p className="text-gray-500">Temperature</p>
              <p className="text-2xl font-bold mt-2">28°C</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl">
              <p className="text-gray-500">Humidity</p>
              <p className="text-2xl font-bold mt-2">65%</p>
            </div>

            <div className="bg-blue-50 p-5 rounded-xl">
              <p className="text-gray-500">Rainfall</p>
              <p className="text-2xl font-bold mt-2">2 mm</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Weather;